'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

// gulp.task('sass', function () {
//   gulp.src('./app/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(minifyCss({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./public/css'));
// });
