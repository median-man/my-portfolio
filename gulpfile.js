const cleanCSS = require('gulp-clean-css');
const compileHb = require('./utils/compileHandlebars.js');
const gulp = require('gulp');
const header = require('gulp-header');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');

// Set the banner content for files from Freelancer Template
const freelancerBanner =
`/*!
* Start Bootstrap - Freelancer v4.0.0-beta (http://startbootstrap.com/template-overviews/freelancer)
* Copyright 2013-2017 Start Bootstrap
* Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
*/
`;

const updateHtmlLinks = function updateHtmlSourceLinksAndCopyToBuild() {
  gulp
    .src('src/index.html')
    .pipe(replace('freelancer.css', 'freelancer.min.css'))
    .pipe(replace('freelancer.js', 'freelancer.min.js'))
    .pipe(gulp.dest('build'));
};

// minify css file
gulp.task('minify-css', () => gulp
  .src('src/css/**/*.css')
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/css')));

// minify javascript files in src/js
gulp.task('minify-js', () => gulp
  .src('src/js/**/*.js')
  .pipe(uglify())
  .pipe(header(freelancerBanner))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/js')));

// copy files
gulp.task('copy', () => {
  gulp.src('src/vendor/**').pipe(gulp.dest('build/vendor'));
  gulp.src('src/img/**').pipe(gulp.dest('build/img'));
});

// User minified source files in index.html
gulp.task('htmlLinks', updateHtmlLinks);

// Compile hbs files to html
gulp.task('compileHbs', compileHb);

gulp.task('default', ['compileHbs', 'minify-css', 'minify-js', 'copy'], () => {
  updateHtmlLinks();
});
