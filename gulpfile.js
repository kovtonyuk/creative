const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rimraf = require('rimraf');
const gulp = require('gulp');
const uglify = require('gulp-uglify');

/*------------ Server ------------*/
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*------------ Pug compile ------------*/
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/templates/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

/*------------ Styles compile ------------*/
gulp.task('styles:compile', function() {
    return gulp.src('source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(gulp.dest('build/css'));
});

/*------------ JS ------------*/
gulp.task('js', function() {
    return gulp.src([
        'source/js/slider.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

/*------------ jQuery ------------*/
// gulp.task('jquery', function() {
//     return gulp.src([
//         'source/js/jquery.js'
//     ])
//         .pipe(sourcemaps.init())
//         .pipe(concat('jquery.min.js'))
//         .pipe(uglify())
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('build/js'));
// });

/*------------ Delete ------------*/
gulp.task('clean', function del(cb) {
    return rimraf('./build', cb);
});

/*------------ Copy fonts ------------*/
gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));

});

/*------------ Copy images ------------*/
gulp.task('copy:images', function () {
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));

});

/*------------ Copy php ------------*/
gulp.task('copy:php', function () {
    return gulp.src('./source/*.*')
        .pipe(gulp.dest('build'));

});

/*------------ Copy ------------*/
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images', 'copy:php'));

/*------------ Watchers ------------*/
gulp.task('watch', function() {
    gulp.watch('source/templates/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));
    gulp.watch('source/js/**/*.js', gulp.series('js'));
});

/*------------ Default ------------*/
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'styles:compile', 'js', 'copy'),
    gulp.parallel('watch', 'server')
    )
);