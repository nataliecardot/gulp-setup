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
    .pipe(gulp.dest('css'));
}

// New in v4. Exports command, allowing you to enter `gulp style` in command line to run compilation
exports.style = style;