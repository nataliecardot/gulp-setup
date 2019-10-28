const gulp = require('gulp');
const sass = require('gulp-sass');
// Calling .create() means you get a unique reference & allows you to create multiple servers or proxies
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS
// Pre v4, would create tasks (gulp.task()), but with v4 you use functions
function compileSCSS() {
  // 1. Let Gulp know where the files are
  // ** is a glob -- matches any character including a forward slash; usually used to indicate any number of subdirectories
  return gulp.src('src/scss/**/*.scss')
    // 2. Pass that file through the compiler (uses gulp-sass)
    .pipe(sass())
    // 3. Where do I save the compiled CSS?
<<<<<<< HEAD
    // TODO: Also should be minifying the HTML file and moving it into the build folder (currently in src)
    .pipe(gulp.dest('build/css'))
    // 4. Stream changes to all browsers (ensures synchronization). Injects changes (update the CSS) without refreshing the page, keeping scroll position intact
||||||| merged common ancestors
    .pipe(gulp.dest('css'))
    // 4. Stream changes to all browsers (ensures synchronization). Injects changes without refreshing the page, keeping scroll position intact
=======
    .pipe(gulp.dest('css'))
    // 4. Stream changes to all browsers (ensures synchronization). Injects changes (update the CSS) without refreshing the page, keeping scroll position intact
>>>>>>> d40e099586c3e4e9860a7bffdca9d3754719977b
    .pipe(browserSync.stream());
}

<<<<<<< HEAD
function watch() {
  browserSync.init({
    // Set up server
    server: {
      // Base directory
      baseDir: 'src'
    }
  });
  // When anything changes, run style function defined above to recompile
  gulp.watch('src/scss/**/*.scss', compileSCSS);
  // When HTML changes, trigger a page refresh
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
}

// Exports command, allowing you to enter command to run the function with matching name defined in this file
exports.compileSCSS = compileSCSS;
exports.watch = watch;
||||||| merged common ancestors
// New in v4. Exports command, allowing you to enter `gulp style` in command line to run compilation
exports.style = style;
=======
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
>>>>>>> d40e099586c3e4e9860a7bffdca9d3754719977b
