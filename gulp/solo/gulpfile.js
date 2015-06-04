var allInOne = true; // debug me
var config = allInOne ? {
  src: {
    css: 'src/css/*.css',
    js: 'src/js/*.js'
  }
} : {
  src: {
    css: [
      'src/css/normalize.css',
      'src/css/main.css'
    ],
    js: [
      'src/js/plugins.js',
      'src/js/main.js'
    ]
  }
};

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('css', function() {
  return gulp.src(config.src.css)
    .pipe($.concat('all.css'))
    .pipe(gulp.dest('.tmp'))
    .pipe($.csso())
    .pipe($.rename('all.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
  return gulp.src(config.src.js)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('js', function() {
  return gulp.src(config.src.js)
    .pipe($.concat('all.js'))
    .pipe(gulp.dest('.tmp'))
    .pipe($.uglify())
    .pipe($.rename('all.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(config.src.js, ['jshint', 'js']);
});

gulp.task('default', ['css', 'js']);
