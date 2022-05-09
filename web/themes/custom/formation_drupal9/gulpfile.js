const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    //1.where is my scss
    return gulp.src('assets/sass/**/*.scss') //gets all files ending with .scss in src/scss
    //2. pass that file through sass compiler
        .pipe(sass().on('error',sass.logError))
        //3. where do I save the compiled css file
        .pipe(gulp.dest('assets/css'))
        //4. stream change to all browsers
        .pipe(browserSync.stream());
}

function test() {
    // browserSync.init({
    //   server: {
    //     baseDir: "./html",
    //     index: "./html/index.html"
    //   }
    // });
    gulp.watch('assets/sass/**/*.scss', style);
    // gulp.watch('./src/*.html').on('change',browserSync.reload);
    // gulp.watch('./src/assets/js/**/*.js').on('change', browserSync.reload);
}

// exports.style = style;
exports.test = test;