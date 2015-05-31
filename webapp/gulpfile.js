var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  less = require('gulp-less'),
  path = require('path'),
  vulcanize = require('gulp-vulcanize');

gulp.task('webserver', function() {
  gulp.src('src/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('deploy', function () {
    return gulp.src('src/index.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.*', './stylesheets_post/*.*', './webapp/*.*'], ['less']);
});

gulp.task('less', function () {
  return gulp.src('./stylesheets_post/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('src/stylesheets'));
});

gulp.task('default', ['webserver', 'watch']);
