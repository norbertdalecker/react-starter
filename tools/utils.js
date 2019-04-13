const appRoot = require('app-root-path');

function getAppRootPath() {
  return appRoot;
}

function getPath(name) {
  return getAppRootPath() + name;
}

module.exports = {
  getAppRootPath,
  getPath
};
