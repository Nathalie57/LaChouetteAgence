const gulp        = require("gulp");
// const sass        = require("gulp-sass");
const cleanCSS    = require("gulp-clean-css");
const browserSync = require("browser-sync");
const concat      = require("gulp-concat");
const minify      = require("gulp-minify");

// function style(){
//   return gulp.src("./src/js/components/**/*.scss")
//     .pipe(sass())
//     .pipe(concat('style.min.css'))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('./app/css'));
// }

function minifyCss(){
  return gulp.src("./*.css")
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
}

function minifyJs(){
  return gulp.src("./**/*.js")
    .pipe(minify())
    .pipe(gulp.dest('./js'));
}

function watch(){
  browserSync.init({
    server: {
      baseDir : "./"
    }
  });
  gulp.watch("./src/css/**/*.css", minifyCss);
  gulp.watch("./src/js/**/*.js", minifyJs);
  gulp.watch("./www/").on("change", browserSync.reload);
}

// exports.style = style;
exports.watch = watch;
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;