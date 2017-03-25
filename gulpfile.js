const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');

gulp.task('js', () => {
    browserify('src/app.js', {debug: true})
            .transform('babelify', {
                sourceMaps: true,
                presets: ['es2015','react']
            })
        .bundle()
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/'))
        .pipe(reload({stream:true}));
});

gulp.task("styles", () => {
    return gulp.src("./src/styles/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat("style.css"))
    .pipe(plumber())
    .pipe(gulp.dest("./public"))
    .pipe(reload({stream: true}));
});

gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['js','bs', 'styles'], () => {
    gulp.watch('src/**/*.scss', ['styles']);
    gulp.watch('src/**/*.js',['js']);
    gulp.watch('./public/style.css',reload);
});