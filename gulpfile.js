'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/_sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/_sass/**/*.scss', gulp.series('sass'));
});

// For whatever reason, output style in the Sass task isn't working; adding this task
gulp.task('minify-css', () => {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css/'));
});