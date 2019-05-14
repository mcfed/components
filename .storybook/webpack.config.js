
const path = require('path');
const storysource = require.resolve('@storybook/addon-storysource/loader')

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.jsx?$/,
    loaders: [storysource],
    include: path.resolve(__dirname, '../'), // this fixed it, I think.
    enforce: 'pre',
  });
  config.module.rules.push({
    test: /\.less$/,
    use: [{
      loader: 'style-loader' // creates style nodes from JS strings
    }, {
      loader: 'css-loader' // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
      options: {
        paths: [
          path.resolve(__dirname, 'src')
        ],
        javascriptEnabled: true,
      }
    }],
  });
  config.resolve.alias = {
      'mcf-components':  path.resolve(__dirname,'../packages/components'),  
  };
  return config;
};
