'use strict';
/**
 * Копирование разного рода файлов
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

/**
 * Копирование ассетов плагинов из компонент bower'а в директорию шаблона
 */
gulp.task('copy-bower-images', function () {
    /*
     return gulp.src(['bower_components/fancybox/source/*.gif', 'bower_components/fancybox/source/*.png', 'bower_components/fancybox/source/*.jpg'])
     .pipe($.newer(gulp.destPath + '/images/fancybox'))
     .pipe(gulp.dest(gulp.destPath + '/images/fancybox'));
     */
});

/**
 * Копирование изображений в директорию шаблона
 */
gulp.task('copy-images', function () {

    return gulp.src('src/images/**/*')
        .pipe(gulp.dest(gulp.destPath + '/images'))
        .pipe(reload({stream: true}));

});

/**
 * Копирование шрифтов в директорию шаблона
 */
gulp.task('copy-fonts', function () {

    return gulp.src(['src/fonts/**/*'])
        .pipe(gulp.dest(gulp.destPath + '/fonts'))
        .pipe(reload({stream: true}));

});
