// log that gulp is running
/* eslint-env node es6 */
let gulp = require('gulp');
let gutil = require('gulp-util');

gulp.task('default', () => gutil.log('Gulp is running'));
