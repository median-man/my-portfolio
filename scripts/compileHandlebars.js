
const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const path = require('path');
const projects = require('../src/template/projects.json');
const rename = require('gulp-rename');

module.exports = function compileHandlebars() {
  console.log('compiling hbars');
  const templateData = { projects };
  return gulp
    .src(path.join(__dirname, '../src/index.hbs'))
    .pipe(handlebars(templateData))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../src')));
};
