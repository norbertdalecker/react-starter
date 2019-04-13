const { getPath } = require('./utils');

// Paths
const paths = {
  src: getPath('/src'),
  srcIndex: getPath('/src/index.tsx'),
  build: getPath('/wwwroot'),
  indexHtml: getPath('/src/assets/index.ejs'),
  static: getPath('/src/assets/static'),
  sw: getPath('/src/assets/sw.js'),
  manifest: getPath('/src/assets/manifest.json')
};

module.exports = {
  paths
};
