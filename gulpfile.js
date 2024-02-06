var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify  = require('gulp-uglify');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require("gulp-ng-html2js");

gulp.task('main', function() {
    var stream = gulp.src(['./client/**/*.js'])
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(sourcemaps.init())
        .pipe(concat('./app.min.js'))
        // .pipe(uglify({mangle: true}))
        .pipe(gulp.dest('./public'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public'));
    return stream;
});

gulp.task('watch', function() {
    watch(['./client/**/*.js'], function() {
        gulp.start('main');
    });
});

gulp.task('default', ['main', 'watch']);