var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('browserify', function() {
  gulp.src('app/app.js')
      .pipe(browserify({
        insertGlobals : true
      }))
      .pipe(gulp.dest('./app/bundle'))
});

gulp.task('connectDev', function () {
  connect.server({
    name: 'Dev App',
    root: ['app'],
    port: 8000,
    livereload: true
  });
});

gulp.task('dev', ['browserify', 'connectDev']);