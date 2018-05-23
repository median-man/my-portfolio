/* eslint import/no-extraneous-dependencies: off */
const gulp = require('gulp');
const rename = require('gulp-rename');
const handlebars = require('gulp-compile-handlebars');
const path = require('path');
const projects = require('../template/projects.json');
const contactData = require('../template/contactData.json');


// Returns the name of a description partial
const whichDescription = function whichDescriptionPartial(name) {
  return `descriptions/${name}`;
};

module.exports = function compileHandlebars() {
  const options = {
    batch: [path.join(__dirname, '../template/partials')],
    helpers: { whichDescription },
  };
  const templateData = { projects, contactData };
  return gulp
    .src(path.join(__dirname, '../template/index.hbs'))
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../src')));
};
