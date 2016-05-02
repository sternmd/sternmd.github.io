var gulp        = require('gulp'),
    less        = require('gulp-less'),
    watch       = require('gulp-watch');

gulp.task('less', function(){
  return gulp.src('public/less/style.less')
    .pipe(less()) // Using gulp-less
    .pipe(gulp.dest('public/stylesheets/'))
});

gulp.task('watch', function(){
  gulp.watch('public/less/**/*.less', ['less']);
});

gulp.task('default', ['watch']);
