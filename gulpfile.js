// const elixir = require('laravel-elixir');
//
// require('laravel-elixir-vue-2');
//
// /*
//  |--------------------------------------------------------------------------
//  | Elixir Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Elixir provides a clean, fluent API for defining some basic Gulp tasks
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for your application as well as publishing vendor resources.
//  |
//  */
//
// elixir((mix) => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var watcher = require('gulp-watch');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

var path = { // define helper paths for resources
  // node path
  node: function(path) {
    return './node_modules/' + path;
  },

  // bower path
  bower: function(path) {
    return './bower_components/' + path;
  },

  vendors: function(path) {
    return './resources/assets/vendors/' + path;
  },

  // images path
  images: function(path) {
    return './resources/assets/images/' + path;
  },

  // script path
  scripts: function(path) {
    return './resources/assets/js/' + path;
  },

  // assets path (public)
  assets: function(path) {
    return './public/assets/' + path;
  },

  // resources path -- general
  resources: function(path) {
    return './resources/assets/' + path;
  },

};

/**
 * Default tasks
 */
gulp.task('default', ['sass', 'js', 'fonts', 'images', 'vendors']);

/**
 * Compile SASS
 * and minify
 */
gulp.task('sass', function () {
  gutil.log(gutil.colors.blue('Compiling sass files >>>'));
  gulp.src(path.resources('sass/bootstrap.scss'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.assets('css')));

  gulp.src(path.resources('sass/app.scss'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest(path.assets('css')));
});

/**
 * Combine js files from js dir
 * Copy js vendor files
 */
gulp.task('js', function() {
  gutil.log(gutil.colors.blue('Copying required js files >>>'));

  gulp.src(path.bower('bootstrap-sass/assets/javascripts/**/*'))
    .pipe(gulp.dest(path.assets('vendors/bootstrap-sass/assets/javascripts')));

  gulp.src(path.bower('jquery-ui/jquery-ui.js'))
    .pipe(gulp.dest(path.assets('vendors/jquery-ui')));

  gutil.log(gutil.colors.green('Combining js files >>>'));
  gulp.src(path.resources('js/*.js'))
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(minifyJS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(path.assets('js')));

});


/**
 * Copy fonts
 */
gulp.task('fonts', function() {
  gutil.log(gutil.colors.green('Copying font files >>>'));
  gulp.src(path.bower('font-awesome/fonts/**/*'))
    .pipe(gulp.dest(path.assets('fonts')));
});

/**
 * Copy images
 */
gulp.task('images', function() {
  gutil.log(gutil.colors.green('Copying images >>>'));
  gulp.src(path.resources('images/**/*'))
    .pipe(gulp.dest(path.assets('images')));
});


/**
 * Spy on image updates (added,deleted and modified)
 */
gulp.task('monitor:images', function() {
  gulp.src(path.resources('images/**/*'))
    .pipe(watcher(path.resources('images/**/*')))
    .pipe(gulp.dest(path.assets('images')));
});

/**
 * Attemp to remove unused images (deleted)
 */
gulp.task('clean:images', function() {
  gutil.colors.green('Sweeping for wards...');
});

/**
 * Vendor assets
 * Folks add here your custom bower vendor assets/files
 * Add @modified under if this block is edited
 * with your name and branch
 */
gulp.task('vendors', function() {
    gulp.src(path.bower('jquery/dist/jquery.min.js'))
      .pipe(gulp.dest(path.assets('vendors')));

    gulp.src(path.bower('moment/min/**/*'))
        .pipe(gulp.dest(path.assets('vendors/moment')));

    gulp.src(path.bower('moment-timezone/builds/**/*'))
        .pipe(gulp.dest(path.assets('vendors/moment-timezone')));

    gulp.src(path.bower('bootstrap-sass/assets/javascripts/boostrap.min.js'))
      .pipe(gulp.dest(path.assets('vendors/bootstrap-sass/js')));

    gulp.src(path.bower('matchHeight/jquery.matchHeight.js'))
        .pipe(gulp.dest(path.assets('vendors/matchHeight')));

    gulp.src(path.bower('lightslider/dist/**/*'))
        .pipe(gulp.dest(path.assets('vendors/lightslider')));

    gulp.src(path.bower('maplace-js/src/**/*'))
      .pipe(gulp.dest(path.assets('vendors/maplace-js')));

    gulp.src(path.bower('easydropdown/src/**/*'))
      .pipe(gulp.dest(path.assets('vendors/easydropdown')));
      gulp.src(path.bower('easydropdown/themes/**/*'))
        .pipe(gulp.dest(path.assets('vendors/easydropdown')));
});

/**
 * Gulp task watcher
 */
gulp.task('watch', function () {
  gutil.log(gutil.colors.green('Watching ...'));
  gulp.watch('./gulpfile.js', ['default']);
  gulp.watch(path.resources('sass/**/*.scss'), ['sass']);
  gulp.watch(path.resources('js/*.js'), ['js']);
  gulp.watch(path.resources('images/**/*.*'), ['images']);
});
