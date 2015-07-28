'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    gutil       = require('gulp-util'),
    coffee      = require('gulp-coffee'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync'),
    ghPages     = require('gulp-gh-pages'),
    concat      = require('gulp-concat'),
    order       = require('gulp-order'),
    gulpif      = require('gulp-if');

var paths = {
  sass      : './src/sass/*.scss',
  coffee    : './src/coffee/*.coffee',
  jade      : './src/jade/*.jade',

  images    : './src/images/*',

  jquery        : './bower_components/jquery/dist/jquery.min.js',
  angular       : './bower_components/angular/angular.min.js',
  bootstrap_js  : './bower_components/bootstrap/dist/js/bootstrap.min.js',
  bootstrap_css : './bower_components/bootstrap/dist/css/*.min.css'
}

gulp.task('sass', function(){
    gulp.src([
          paths.bootstrap_css,
          paths.sass
        ])
        .pipe(gulpif(/\.scss$/, sass({ style: 'compressed' })))
        .pipe(order([
          'bootstrap.min.css',
          'bootstrap-theme.min.css',
          'src/sass/*.scss'
        ]))
        .pipe(concat('./main.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('coffee', function(){
  gulp.src([
        paths.jquery,
        paths.angular,
        paths.bootstrap_js,
        paths.coffee,
      ])
      .pipe(gulpif(/\.coffee$/, coffee({bare: true})))
      .pipe(order([
        'jquery.min.js',
        'angular.min.js',
        'bootstrap.min.js',
        'src/coffee/*.coffee'
      ]))
      .pipe(concat('./main.js'))
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
  gulp.watch(paths.sass,                ['sass']);
  gulp.watch(paths.coffee,              ['coffee']);
  gulp.watch('./src/jade/**/*.jade',    ['jade']);
});

gulp.task('deploy', ['compile'], function() {
  return gulp.src('./build/**/*')
             .pipe(ghPages());
});

gulp.task('default', ['copy', 'compile', 'server', 'watch']);
