var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var mocha = require('gulp-mocha');
var jscs = require('gulp-jscs');

var fileList = [
    'index.js',
    'lib/**/*.js',
    'test/**/*.js'
];

gulp.task('lint', function() {
    return gulp.src(fileList)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish));
});

gulp.task('test', function() {
    return gulp.src(['test/**/*.js'])
        .pipe(mocha());
});

gulp.task('jscs', function () {
    return gulp.src(fileList)
        .pipe(jscs());
});

gulp.task('default', ['lint', 'jscs', 'test']);