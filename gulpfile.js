// pobiera gulpa do zmiennej
var gulp = require('gulp');
// pobiera wtyczkę sass do zmiennej
var sass = require('gulp-sass');
// pobiera wtyczkę sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// definiuje zadanie
gulp.task('sass', function() {
  // w src ustawia się wejście pliku scss
    return gulp.src('scss/*.scss')
    // inicjuje sourcemaps
        .pipe(sourcemaps.init())
        .pipe(sass({
          // ustawia drukowanie błędów do konsoli
            errLogToConsole: true,
            // ustawia format pliku css
            outputStyle: 'expanded'
        }))
        // zapisuje sourcemaps
        .pipe(sourcemaps.write())
        // wskazuje katalog do którego trafi plik css
        .pipe(gulp.dest('css'))
});
// ustawia watcher
gulp.task('watch', function() {
    gulp.watch('scss/*/*.scss', ['sass']);
    gulp.watch('scss/*.scss', ['sass']);
});
