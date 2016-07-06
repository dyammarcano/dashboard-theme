var gulp        = require('gulp');
var rename      = require('gulp-rename');
var stylus      = require('gulp-stylus');
var sourcemaps  = require('gulp-sourcemaps');


gulp.task('styles', function() {
  gulp.src('dashboard.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({ compress: true, linenos: false }))
    .pipe(rename('dashboard.min.css'))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('dashboard.styl', ['styles']);
});


gulp.task('default', ['styles', 'watch']);
