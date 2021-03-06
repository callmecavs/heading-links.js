var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();

// error handler
// https://github.com/gulpjs/gulp/issues/259
var onError = function(error) {
  console.log(error);
  this.emit('end');
};

// minify css
gulp.task('sass', function() {
  return gulp.src('dist/heading-links.scss')
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

// uglify script
gulp.task('scripts', function() {
  return gulp.src('dist/heading-links.js')
    .pipe(gulp.dest('dist'))
    .pipe(plugins.rename(function(path) {
      path.basename = "heading-links.min"
    }))
    .pipe(plugins.uglify())
    .on('error', onError)
    .pipe(gulp.dest('dist'))
    .pipe(plugins.connect.reload());
});

// localhost:3000
gulp.task('server', function() {
  return plugins.connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
});

// watch js file
gulp.task('watch', function() {
  gulp.watch('dist/heading-links.scss', ['sass']);
  gulp.watch('dist/heading-links.js', ['scripts']);
});

// default task
gulp.task('default', ['server', 'sass', 'scripts', 'watch']);
