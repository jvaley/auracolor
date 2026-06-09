const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/height: 90px;/, 'height: 110px;');
html = html.replace(/width: 56px;\s*height: 56px;/, 'width: 75px;\n            height: 75px;');
html = html.replace(/\.logo-divider \{\s*width: 2px;\s*height: 40px;/, '.logo-divider {\n            width: 2px;\n            height: 55px;');
html = html.replace(/\.logo-wordmark \{\s*width: auto;\s*height: 38px;/, '.logo-wordmark {\n            width: auto;\n            height: 52px;');

fs.writeFileSync('index.html', html);
console.log('Update complete.');
