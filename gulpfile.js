var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default', function () {
  return gulp.src(['./src/sass/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['default']);
});