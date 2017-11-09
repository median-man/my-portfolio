
const fs = require('fs');
const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const path = require('path');
const projects = require('../src/template/projects.json');
const rename = require('gulp-rename');

const projDescription = function getProjectDescriptionFile(fname) {
  const detailsFileName = path.join(__dirname, `../src/template/descriptions/${fname}.hbs`);

  return fs.readFileSync(detailsFileName);
};

// Returns the name of a description partial
const whichDescription = function whichDescriptionPartial(name) {
  return `descriptions/${name}`;
};

module.exports = function compileHandlebars() {
  const options = {
    batch: [path.join(__dirname, '../src/template/partials')],
    helpers: { whichDescription },
  };
  const templateData = { projects };
  return gulp
    .src(path.join(__dirname, '../src/index.hbs'))
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../src')));
};
