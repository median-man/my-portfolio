/* eslint-env node es6 */
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const header = require('gulp-header');
// const gutil = require('gulp-util');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Set the banner content for files from Freelancer Template
const freelancerBanner =
`/*!
* Start Bootstrap - Freelancer v4.0.0-beta (http://startbootstrap.com/template-overviews/freelancer)
* Copyright 2013-2017 Start Bootstrap
* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
*/
`;

// minify css file
gulp.task('minify-css', () => gulp
  .src('src/css/**/*.css')
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/css')));

// minify javascript
gulp.task('minify-js', () => gulp
  .src('src/js/**/*.js')
  .pipe(uglify())
  .pipe(header(freelancerBanner))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/js')));
