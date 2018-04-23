const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('default', ['watch']);

gulp.task('sass', () => {
    return gulp.src('./sass/app.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['sass'], () => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch('./sass/**/*.sass', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});

