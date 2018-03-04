const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpCopy = require('gulp-copy');

const sassFiles = 'src/styles/*.sass';
const cssDest = 'dist/styles/';
const srcFiles = ['src/*', 'src/images/*'];
const destPath = 'dist/';

gulp.task('build:copy', () => {
    return gulp
        .src(srcFiles)
        .pipe(gulpCopy(destPath, {prefix: 1}));
});

gulp.task('build:styles', () => {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task("build", ["build:styles", "build:copy"]);

gulp.task("default", ["build"]);