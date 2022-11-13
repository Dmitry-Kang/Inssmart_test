'use strict';

const gulp = require('gulp');
var watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./style/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./style/sass/*.scss', buildStyles);
};