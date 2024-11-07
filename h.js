const minify = require('html-minifier').minify;
const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, data) => {
  if (err) throw err;
  const minified = minify(data, {
    removeComments: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
  });
  fs.writeFile('index.min.html', minified, (err) => {
    if (err) throw err;
    console.log('HTML has been minified!');
  });
});
