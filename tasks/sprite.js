'use strict';
/**
 * Создание спрайта
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

gulp.task('resize-images', function () {
    return gulp.src('src/sprite/*@2x.png')
        .pipe($.newer({
            dest: 'src/sprite',
            map: function (pathDir) {
                return pathDir.replace('@2x', '');
            }
        }))
        .pipe($.jimp({scale: 0.5}))
        .pipe($.rename(function (path) {
            path.basename = path.basename.replace('@2x', '');
        }))
        .pipe(gulp.dest('src/sprite'));
});

gulp.task('sprite-retina', function () {
    var spriteData;

    spriteData = gulp.src('src/sprite/*.png')
        .pipe($.newer(gulp.destPath + '/images/sprite.png'))
        .pipe($.spritesmith({
            imgPath: '../images/sprite.png',
            imgName: 'sprite.png',
            retinaSrcFilter: ['src/sprite/*@2x.png'],
            retinaImgPath: '../images/sprite@2x.png',
            retinaImgName: 'sprite@2x.png',
            cssName: 'sprite.styl',
            padding: 2
        }));

    spriteData.img
        .pipe(gulp.dest(gulp.destPath + '/images/'))
        .pipe(reload({stream:true}));

    spriteData.css
        .pipe(gulp.dest('src/stylus/partials'))
        .pipe(reload({stream:true}));

    return spriteData;
});

gulp.task('sprite-normal', function () {
    var spriteData;

    spriteData = gulp.src('src/sprite/*.png')
        .pipe($.newer(gulp.destPath + '/images/sprite.png'))
        .pipe($.spritesmith({
            imgPath: '../images/sprite.png',
            imgName: 'sprite.png',
            cssName: 'sprite.styl',
            padding: 2
        }));

    spriteData.img
        .pipe(gulp.dest(gulp.destPath + '/images/'))
        .pipe(reload({stream:true}));

    spriteData.css
        .pipe(gulp.dest('src/stylus/partials'))
        .pipe(reload({stream:true}));

    return spriteData;
});
