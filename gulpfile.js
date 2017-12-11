/*
 * This file contains all the build scrips.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify');

/**
 * Simple Gulp task
 */
gulp.task('hello', function() {
  console.log('Hello Zell');
});

/**
 * browserify the app.js file and create bundle one
 */
gulp.task('browserify', function() {
  gulp.src('app/app.js')
      .pipe(browserify({
        insertGlobals : true
      }))
      .pipe(gulp.dest('./app/bundle'))
});

/**
 * Start dev Server
 */
gulp.task('connectDev', function () {
  connect.server({
    name: 'Dev App',
    root: ['app'],
    port: 8000,
    livereload: true
  });
});

/**
 * Run Project in dev level
 */
gulp.task('dev', ['browserify', 'connectDev']);