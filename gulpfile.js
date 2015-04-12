/*!
 * gulp
 * $ npm install gulp gulp-uglify gulp-concat --save-dev */
 
// Load plugins
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss   =   require('gulp-minify-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');
 

 
// Compact-js
gulp.task('compact-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/js'));
});

// Minify-css
gulp.task('minify-css', function() {
    return gulp.src('css/**/*.css')
        .pipe(minifyCss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Default
// Run Compact-js and Minify-css task.
gulp.task('default', ['compact-js', 'minify-css'], function() {});