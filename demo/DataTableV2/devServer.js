const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const replace = require('rollup-plugin-replace');
const rollup = require('rollup');
const typescript = require('@rollup/plugin-typescript');

const demoRoot = __dirname;
const buildRoot = path.join(demoRoot, '.build');
const port = Number(process.env.PORT || 5174);
const host = process.env.HOST || '127.0.0.1';
let serverStarted = false;
let rebuilding = false;
let rebuildTimer = null;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function ensureBuildRoot() {
  if (!fs.existsSync(buildRoot)) {
    fs.mkdirSync(buildRoot, {recursive: true});
  }
}

function demoResolveAliases() {
  const aliases = {
    '@ant-design/compatible': path.join(demoRoot, 'shims/antdCompatible.js'),
    'react-beautiful-dnd': path.join(demoRoot, 'shims/reactBeautifulDnd.js'),
    indexof: require.resolve('indexof/index.js'),
  };

  return {
    name: 'demo-resolve-aliases',
    resolveId(importee) {
      return aliases[importee] || null;
    },
  };
}

function normalizeLessImports() {
  const antdRoot = path.dirname(require.resolve('antd/package.json'));

  return {
    name: 'demo-normalize-less-imports',
    transform(code, id) {
      if (!id.endsWith('.less')) {
        return null;
      }

      return code.replace(/~antd\//g, `${antdRoot}/`);
    },
  };
}

function createRollupConfig() {
  const outputOptions = {
    file: path.join(buildRoot, 'bundle.js'),
    format: 'iife',
    globals: {
      antd: 'antd',
      moment: 'moment',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    name: 'DataTableV2Demo',
    sourcemap: true,
  };

  const inputOptions = {
    external: ['antd', 'moment', 'react', 'react-dom'],
    input: path.join(demoRoot, 'index.jsx'),
    plugins: [
      demoResolveAliases(),
      normalizeLessImports(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      nodeResolve({
        browser: true,
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
        jsnext: true,
        main: true,
      }),
      postcss({
        extensions: ['.css', '.less'],
        inject: true,
        use: [
          [
            'less',
            {
              javascriptEnabled: true,
              modifyVars: {
                'root-entry-name': 'default',
              },
            },
          ],
        ],
      }),
      typescript({
        declaration: false,
        jsx: 'react',
        module: 'ESNext',
        noEmit: false,
        target: 'es5',
      }),
      babel({
        babelrc: false,
        include: [
          'demo/DataTableV2/**',
          'src/DataTableV2/**',
          'node_modules/react-draggable/**',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          ['@babel/preset-env', {modules: false}],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-export-namespace-from',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-export-default-from',
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true,
            },
          ],
        ],
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'node_modules/react/index.js': [
            'Children',
            'Component',
            'Fragment',
            'PureComponent',
            'cloneElement',
            'createContext',
            'createElement',
            'forwardRef',
            'isValidElement',
            'memo',
            'useContext',
            'useEffect',
            'useMemo',
            'useRef',
            'useState',
          ],
          'node_modules/react-dom/index.js': ['render'],
          'node_modules/react-is/index.js': [
            'ForwardRef',
            'Memo',
            'isForwardRef',
            'isMemo',
          ],
        },
      }),
    ],
  };

  return {inputOptions, outputOptions};
}

function serveFile(response, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
      response.end('Not found');
      return;
    }

    response.writeHead(200, {
      'Content-Type':
        mimeTypes[path.extname(filePath)] || 'application/octet-stream',
    });
    response.end(content);
  });
}

function startServer() {
  const server = http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;

    if (pathname === '/vendor/antd.css') {
      serveFile(response, require.resolve('antd/dist/antd.css'));
      return;
    }

    if (pathname === '/vendor/antd.js') {
      serveFile(response, require.resolve('antd/dist/antd.js'));
      return;
    }

    if (pathname === '/vendor/compatible.css') {
      serveFile(
        response,
        require.resolve('@ant-design/compatible/assets/index.css'),
      );
      return;
    }

    if (pathname === '/vendor/moment.js') {
      serveFile(response, require.resolve('moment/min/moment.min.js'));
      return;
    }

    if (pathname === '/vendor/react.js') {
      serveFile(response, require.resolve('react/umd/react.development.js'));
      return;
    }

    if (pathname === '/vendor/react-dom.js') {
      serveFile(
        response,
        require.resolve('react-dom/umd/react-dom.development.js'),
      );
      return;
    }

    if (pathname === '/bundle.js' || pathname === '/bundle.js.map') {
      serveFile(response, path.join(buildRoot, pathname.slice(1)));
      return;
    }

    serveFile(response, path.join(demoRoot, 'index.html'));
  });

  server.on('error', (error) => {
    console.error(`DataTableV2 demo server failed: ${error.message}`);
  });

  server.listen(port, host, () => {
    serverStarted = true;
    console.log(`DataTableV2 demo: http://localhost:${port}`);
  });
}

async function buildBundle() {
  if (rebuilding) {
    return;
  }

  rebuilding = true;
  const startedAt = Date.now();
  const {inputOptions, outputOptions} = createRollupConfig();

  try {
    console.log('Bundling DataTableV2 demo...');
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
    if (bundle.close) {
      await bundle.close();
    }
    console.log(`Bundle ready in ${Date.now() - startedAt}ms`);
  } finally {
    rebuilding = false;
  }
}

function scheduleRebuild() {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    buildBundle().catch((error) => {
      console.error(error);
    });
  }, 120);
}

function watchSourceChanges() {
  const sourceRoots = [demoRoot, path.join(demoRoot, '../../src/DataTableV2')];

  sourceRoots.forEach((sourceRoot) => {
    try {
      fs.watch(sourceRoot, {recursive: true}, (eventType, filename) => {
        if (
          sourceRoot === demoRoot &&
          filename &&
          filename.startsWith('.build')
        ) {
          return;
        }

        scheduleRebuild();
      });
    } catch (error) {
      console.warn(
        `File watching disabled for ${sourceRoot}: ${error.message}`,
      );
    }
  });
}

async function start() {
  try {
    await buildBundle();
    startServer();
    watchSourceChanges();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

ensureBuildRoot();
start();
