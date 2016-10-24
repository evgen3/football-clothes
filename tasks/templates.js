'use strict';

var gulp = require('gulp'),
    data = require('gulp-data'),
    jade = require('gulp-jade'),
    prettify = require('gulp-html-prettify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    fs = require('fs'),
    $ = require('gulp-load-plugins')();

gulp.task('templates', function () {

    gulp.src('src/templates/*.jade')
        .pipe($.plumber())
        .pipe(data(function (file) {
            return JSON.parse(fs.readFileSync('src/templates/data/data.json'));
        }))
        .pipe(jade({
            pretty: true
        }))
        .pipe(prettify({
            'unformatted': ['pre', 'code'],
            'indent_with_tabs': true,
            'preserve_newlines': true,
            'brace_style': 'expand',
            'end_with_newline': true
        }))
        .pipe(gulp.dest(gulp.destPath))
        .pipe(reload({stream: true}));

});
