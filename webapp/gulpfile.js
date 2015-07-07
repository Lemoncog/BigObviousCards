var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  react = require('gulp-react'),
  less = require('gulp-less'),
  path = require('path'),
  browserify = require('browserify'),
  debug = require('gulp-debug');

gulp.task('webserver', function() {
  return gulp.src('dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('copy', function () {
      gulp.watch(['src/app/*.html',
                     'src/stylesheets/*.css',
                    'src/stylesheets/**'], function() {
        gulp.src(['src/app/*.html',
                     'src/stylesheets/*.css',
                    'src/stylesheets/**'])
        .pipe(debug())
        .pipe(gulp.dest('dist'));
      });
});

gulp.task('less', function () {
   gulp.watch('./stylesheets_post/**/*.less', function() {
      gulp.src('./stylesheets_post/**/*.less')
        .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
      .pipe(debug())
      .pipe(gulp.dest('dist'));
  });
});

gulp.task('copyModules', function() {
      gulp.watch('src/node_modules/**/*', function() {
        gulp.src('src/node_modules/**/*')
          .pipe(debug())
          .pipe(gulp.dest('tmp/node_modules/'));   
      });
})

gulp.task('copyJS', function() {
       gulp.watch(['src/app/*.js', 'src/scripts/*.js'], function() {
        gulp.src(['src/app/*.js', 'src/scripts/*.js'])
        .pipe(debug())
        .pipe(gulp.dest('tmp'));
       });                    
})

gulp.task('jsxTransform', function () {
    gulp.watch('./src/app/view/*.jsx', function() {
         gulp.src('./src/app/view/*.jsx')
        .pipe(react())
        .pipe(debug())
        .pipe(gulp.dest('tmp'));
      });

    
});

gulp.task('watch', function () {
  return gulp.watch(['./*.*', './src/app/*.html', './src/app/view/*.jsx'], ['less', 'jsxTransform', 'copyJS', 'copy']);
});

gulp.task('default', ['jsxTransform', 'copyJS',  'copyModules', 'less', 'copy', 'webserver', 'watch']);
