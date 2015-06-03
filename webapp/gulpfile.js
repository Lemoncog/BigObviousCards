var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  react = require('gulp-react'),
  less = require('gulp-less'),
  path = require('path'),
  browserify = require('gulp-browserify');

gulp.task('webserver', function() {
  gulp.src('dist/')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task('copy', function () {
    return gulp.src(['src/app/*.html',
                     'src/stylesheets/*.css',
                    'src/stylesheets/**'])
        .pipe(gulp.dest('dist'));
});

// Basic usage 
gulp.task('browserify', function() {
    // Single entry point to browserify 
    gulp.src('tmp/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : true//!gulp.env.production
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('less', function () {
  return gulp.src('./stylesheets_post/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyModules', function() {
        return gulp.src(['src/node_modules/**/*'])
        .pipe(gulp.dest('tmp/node_modules/'));   
})

gulp.task('copyJS', function() {
       return gulp.src(['src/app/*.js',
                       'src/scripts/*.js'])
        .pipe(gulp.dest('tmp'));                    
})

gulp.task('jsxTransform', function () {
    return gulp.src('./src/app/view/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('tmp'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.*', './stylesheets_post/**/*.less', './src/app/*.html', './src/app/view/*.jsx'], ['less', 'jsxTransform', 'copyJS', 'copyModules', 'copy']);
});

gulp.task('default', ['jsxTransform', 'copyJS',  'copyModules', 'less', 'copy', 'webserver', 'watch']);
