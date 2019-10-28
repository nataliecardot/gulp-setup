const gulp = require('gulp');
const sass = require('gulp-sass');
// Calling .create() means you get a unique reference & allows you to create multiple servers or proxies
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS
// Pre v4, would create tasks (gulp.task()), but with v4 you use functions
function style() {
  // 1. Let Gulp know where the files are
  // ** is a glob -- matches any character including a forward slash; usually used to indicate any number of subdirectories
  return gulp.src('src/scss/**/*.scss')
    // 2. Pass that file through the compiler (uses gulp-sass)
    .pipe(sass())
    // 3. Where do I save the compiled CSS?
    .pipe(gulp.dest('css'))
    // 4. Stream changes to all browsers (ensures synchronization). Injects changes (update the CSS) without refreshing the page, keeping scroll position intact
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    // Set up server
    server: {
      // Base directory
      baseDir: 'src'
    }
  });
  // When anything changes, run style function defined above to recompile
  gulp.watch('src/scss/**/*.scss', style);
  // When HTML changes, trigger a page refresh
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

// Exports command, allowing you to enter command to run the function with matching name defined in this file
exports.style = style;
exports.watch = watch;