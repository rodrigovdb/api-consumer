'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    gutil       = require('gulp-util'),
    coffee      = require('gulp-coffee'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync'),
    ghPages     = require('gulp-gh-pages');

var paths = {
  sass              : './src/sass/*.scss',
  coffee            : './src/coffee/*.coffee',
  jade              : './src/jade/*.jade',

  images            : './src/images/*'
}

gulp.task('sass', function(){
    gulp.src(paths.sass)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('coffee', function(){
  gulp.src(paths.coffee)
      .pipe(coffee({bare: true}).on('error', gutil.log))
      .pipe(gulp.dest('./build/js/'))
});

gulp.task('jade', function(){
  var YOUR_LOCALS = {};

  gulp.src(paths.jade)
      .pipe(jade({ locals: YOUR_LOCALS }))
      .pipe(gulp.dest('./build/'))
});

gulp.task('images', function () {
  gulp.src(paths.images)
      .pipe(gulp.dest('./build/img'));
});

gulp.task('copy', ['images']);
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

gulp.task('deploy', function() {
  gulp.src('./build/**/*')
      .pipe(ghPages());
});

gulp.task('default', ['copy', 'compile', 'server', 'watch']);
