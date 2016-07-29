#!/usr/bin/node

var fs = require('fs');
var minify = require('html-minifier').minify;

var toc = require('./toc'); 

var prologueTemplate = fs.readFileSync('./prologue.txt', 'utf-8');
var epilogueTemplate = fs.readFileSync('./epilogue.txt', 'utf-8');

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
  
  var epilogue = epilogueTemplate;
  
  // always add \n to the end of the file 
  var minified = minify(prologue + slides + epilogue, {
      collapseWhitespace: true,
      minifyJS: true
  }) + '\n';
  
  fs.writeFileSync('../' + tocEntry.path, minified, 'utf-8');
  console.log('Output:', tocEntry.path);
});
