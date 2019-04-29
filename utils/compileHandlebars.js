/* eslint import/no-extraneous-dependencies: off */
const gulp = require('gulp')
const rename = require('gulp-rename')
const handlebars = require('gulp-compile-handlebars')
const debug = require('gulp-debug')
const path = require('path')
const projects = require('../template/projects.json')
const contactData = require('../template/contactData.json')

// Returns the name of a description partial
const whichDescription = function whichDescriptionPartial(name) {
  return `project-descriptions/${name}`
}

function buildProjectDescriptions() {
  return gulp
    .src('content/project-descriptions/*.html', { cwd: __dirname })
    .pipe(debug({ minimal: false }))
    .pipe(
      gulp.dest('../template/partials/project-descriptions'),
      { cwd: __dirname }
    )
}

function compile() {
  const options = {
    batch: [path.join(__dirname, '../template/partials')],
    helpers: { whichDescription }
  }
  const templateData = { projects, contactData }
  return gulp
    .src('../template/index.hbs', { cwd: __dirname })
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(path.join(__dirname, '../src')))
}

module.exports = function compileHandlebars(done) {
  gulp.series(buildProjectDescriptions, compile)
  return done()
}
