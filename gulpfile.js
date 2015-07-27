'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    gutil       = require('gulp-util'),
    coffee      = require('gulp-coffee'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync');

var paths = {
  jquery            : './node_modules/jquery/dist/jquery.min.js',
  fontawesome_css   :  './node_modules/font-awesome/scss/font-awesome.scss',
  fontawesome_font  : './node_modules/font-awesome/fonts/*',

  sass              : './src/sass/*.scss',
  coffee            : './src/coffee/*.coffee',
  jade              : './src/jade/*.jade'
}

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('coffee', function() {
  gulp.src(paths.coffee)
      .pipe(coffee({bare: true}).on('error', gutil.log))
      .pipe(gulp.dest('./build/js/'))
});

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src(paths.jade)
      .pipe(jade({ locals: YOUR_LOCALS }))
      .pipe(gulp.dest('./build/'))
});

gulp.task('compile', ['sass', 'coffee', 'jade']);

gulp.task('server', function () {
  browserSync({
    files   : ['./build/js/*.js', './build/css/*.css', './build/img/*', './build/*.html'],
    server  : { baseDir : './build' }
  });
});

gulp.task('watch', function(){
  gulp.watch(paths.sass,    ['sass']);
  gulp.watch(paths.coffee,  ['coffee']);
  gulp.watch(paths.jade,    ['jade']);
});

gulp.task('default', ['compile', 'server', 'watch']);
