const cleanCSS = require('gulp-clean-css')
const gulp = require('gulp')
const header = require('gulp-header')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const uglify = require('gulp-uglify')
const path = require('path')
const { execSync } = require('child_process')
const compileHbs = require('./utils/compileHandlebars.js')
const freelancerBanner = require('./template/freelancerBanner')

exports.default = gulp.series(
  clearBuild,
  gulp.parallel(compileHbs, minifyCss, minifyJs, copyVendorFiles, copyImages),
  updateHtmlLinks
)

function clearBuild(done) {
  const targetDir = path.join(__dirname, 'build')
  const rmrf = `rm -rf ${targetDir}`
  execSync(rmrf)
  done()
}

function minifyCss() {
  return gulp
    .src('src/css/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
}

function minifyJs() {
  return gulp
    .src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(header(freelancerBanner))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/js'))
}

function copyVendorFiles() {
  return gulp.src('src/img/**').pipe(gulp.dest('build/img'))
}

function copyImages() {
  return gulp.src('src/vendor/**').pipe(gulp.dest('build/vendor'))
}

function updateHtmlLinks() {
  return gulp
    .src('src/index.html')
    .pipe(replace('freelancer.css', 'freelancer.min.css'))
    .pipe(replace('freelancer.js', 'freelancer.min.js'))
    .pipe(gulp.dest('build'))
}
