#!/usr/bin/node

var fs = require('fs');
var minify = require('html-minifier').minify;

var toc = require('./toc');

var prologueTemplate = fs.readFileSync('./prologue.txt', 'utf-8');
var epilogueTemplate = fs.readFileSync('./epilogue.txt', 'utf-8');

var TLKIO_CSS_DATA_URI = 'data:text/css,' +
  escape(escape(
    'html{overflow-y:auto}' +
    '#channel{font-size:18px}' +
    '.theme--day{background-color:#f4f3f1!important}' +
    '.theme--pop{background-color:#f9eced!important}' +
    '.theme--minimal{background-color:white!important}' +
    '.theme--night{background-color:#26282c!important}'
  ))
    .replace(/%2521/g, '!')
    .replace(/%253A/g, ':')
    .replace(/%257B/g, '{')
    .replace(/%257D/g, '}');  // to save characters

toc.forEach(function(tocEntry) {
  if (!tocEntry.path)
    throw new Error('Missing output path: ' + JSON.stringify(tocEntry));
  if (!tocEntry.slides)
    throw new Error('Missing slides: ' + JSON.stringify(tocEntry));

  var prologue = prologueTemplate
    .replace('{{title}}', tocEntry.title || '')
    .replace('{{description}}', tocEntry.description || '')
    .replace('{{author}}', tocEntry.author || 'Kuang-Lin Pan');

  var slides = tocEntry.slides.map(function(path) {
      return '<section\
          data-markdown="' + path + '"\
          data-separator="^\\n-{6,}\\n$"\
          data-separator-vertical="^\\n---\\n$">\
        </section>';
  }).join('');

  var epilogue = epilogueTemplate
    .replace('{{tlkio-css}}', TLKIO_CSS_DATA_URI);

  // always add \n to the end of the file
  var minified = minify(prologue + slides + epilogue, {
      collapseWhitespace: true,
      minifyJS: true
  }) + '\n';

  fs.writeFileSync('../' + tocEntry.path, minified, 'utf-8');
  console.log('Output:', tocEntry.path);
});
