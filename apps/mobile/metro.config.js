const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch the shared data and lib directories
config.watchFolders = [
  path.resolve(monorepoRoot, 'data'),
  path.resolve(monorepoRoot, 'lib'),
];

// Ensure Metro resolves from the mobile app's node_modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = config;
