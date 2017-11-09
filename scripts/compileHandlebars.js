
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

// Gets the description html for each project
const getDescriptions = function getProjectDescriptions(projects) {
  projects.forEach((project) => {
    const detailsFileName = path.join(__dirname, `../src/template/descriptions/${project.descriptionFile}.txt`);
    project.description = fs.readFileSync(detailsFileName);
  });
};


module.exports = function compileHandlebars() {
  // const helpers = { projDescription };
  const options = {
    batch: [path.join(__dirname, '../src/template/partials')],
  };
  const templateData = { projects };
  getDescriptions(templateData.projects);
  return gulp
    .src(path.join(__dirname, '../src/index.hbs'))
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../src')));
};
