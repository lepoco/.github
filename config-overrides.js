//const path = require("path");
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

module.exports = function override(config, env) {
  config.target = 'web';
  config.mode = 'production';
  config.output.crossOriginLoading = 'anonymous';

  //config.plugins.push(new SubresourceIntegrityPlugin());

  return config;
};
