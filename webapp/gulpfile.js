var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  react = require('gulp-react'),
  less = require('gulp-less'),
  path = require('path'),
  vulcanize = require('gulp-vulcanize');

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('deploy', function () {
    return gulp.src(['src/app/*.html', 'src/app/*.js', 'src/scripts/*.js'])
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.*', './stylesheets_post/*.*', './src/*.html', './src/app/view/*.jsx'], ['less', 'jsxTransform', 'deploy']);
});

gulp.task('less', function () {
  return gulp.src('./stylesheets_post/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist/stylesheets'));
});

gulp.task('jsxTransform', function () {
    return gulp.src('./src/app/view/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jsxTransform', 'less', 'deploy', 'webserver', 'watch']);
