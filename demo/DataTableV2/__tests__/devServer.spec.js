const fs = require('fs');
const path = require('path');

describe('DataTableV2 demo dev server bundling', () => {
  it('preserves ES modules for Rollup instead of emitting browser-unsafe CommonJS exports', () => {
    const devServerSource = fs.readFileSync(
      path.join(__dirname, '../devServer.js'),
      'utf8',
    );

    expect(devServerSource).toContain(
      "['@babel/preset-env', {modules: false}]",
    );
  });

  it('does not rebuild when Rollup writes into the build output directory', () => {
    const devServerSource = fs.readFileSync(
      path.join(__dirname, '../devServer.js'),
      'utf8',
    );

    expect(devServerSource).toContain("filename.startsWith('.build')");
  });
});
