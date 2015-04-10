/*!
 * gulp
 * $ npm install gulp gulp-uglify gulp-concat --save-dev */
 
// Load plugins
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
 

 
// Compact-js
gulp.task('compact-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'));
});