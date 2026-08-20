import fs from 'fs';

const baremosJson = JSON.parse(fs.readFileSync('baremo.json', 'utf8'));

let appJs = fs.readFileSync('app.js', 'utf8');

// Replace DEFAULT_BAREMOS array
const startIndex = appJs.indexOf('const DEFAULT_BAREMOS = [');
const endIndex = appJs.indexOf('const APP_VERSION =');

if (startIndex !== -1 && endIndex !== -1) {
  const newDefaultBaremos = 'const DEFAULT_BAREMOS = ' + JSON.stringify(baremosJson, null, 2) + ';\n\n';
  appJs = appJs.substring(0, startIndex) + newDefaultBaremos + appJs.substring(endIndex);
  fs.writeFileSync('app.js', appJs, 'utf8');
  console.log('Successfully updated DEFAULT_BAREMOS in app.js with', baremosJson.length, 'items.');
} else {
  console.error('Could not find DEFAULT_BAREMOS block in app.js');
}
