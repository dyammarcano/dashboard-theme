var gulp        = require('gulp');
var rename      = require('gulp-rename');
var stylus      = require('gulp-stylus');
var sourcemaps  = require('gulp-sourcemaps');
var clean       = require('gulp-clean');

gulp.task('styles', function() {
  gulp.src('build', { read: false })
    .pipe(clean());
    
  gulp.src('dashboard.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true, linenos: false }))
    .pipe(rename('dashboard.min.css'))
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest('dist'));
});

gulp.task('styles-dev', function() {
  gulp.src('dashboard.styl')
    .pipe(stylus({ compress: false, linenos: true }))
    .pipe(rename('dashboard.css'))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('./**/*.styl', ['styles-dev']);
});


gulp.task('default', ['styles-dev']);

gulp.task('dist', ['styles']);
