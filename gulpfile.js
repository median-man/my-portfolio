/* eslint-env node es6 */
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');

// map css file to build
gulp.task('minify-css', () => gulp
  .src('src/css/**/*.css')
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/css')));
