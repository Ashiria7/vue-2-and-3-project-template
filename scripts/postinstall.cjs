const path = require('path');
const fs = require('fs');

const packageFile = path.resolve(__dirname, '../package.json');

const modulePaths = {
  3: './dist/vue3/index.esm.js',
  2: './dist/vue2/index.esm.js'
};

function switchVersion(version) {
  const modulePath = modulePaths[version];
  const packageJson = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
  if (modulePath !== packageJson.module) {
    packageJson.module = modulePath;
    packageJson.exports['.'].import = modulePath;
    packageJson.exports['.'].require = modulePath;
    fs.writeFileSync(packageFile, JSON.stringify(packageJson, null, '  '), 'utf8');
  }
  console.log(`[@shs/icon] Switched to Vue ${version} environment.`);
}

function loadVue() {
  try {
    return require('vue');
  } catch (e) {
    return null;
  }
}

const Vue = loadVue();

// Align the process with vue-demi
if (!Vue || typeof Vue.version !== 'string') {
  console.warn('[@shs/icon] Vue is not found. Please run "npm install vue" to install.');
} else if (Vue.version.startsWith('3.')) {
  switchVersion(3);
} else if (Vue.version.startsWith('2.')) {
  switchVersion(2);
} else {
  console.warn(`[@shs/icon] Vue version v${Vue.version} is not supported.`);
}
