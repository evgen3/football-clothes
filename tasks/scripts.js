'use strict';
/**
 * Сборка JavaScript
 */
var gulp = require('gulp'),
    modernizr = require("modernizr"),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    $ = require('gulp-load-plugins')();

var src = {
    /**
     * "Ядро" javascript, без которого не будут работать другие скрипты
     */
    core: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/CanJS/can.jquery.js',
        'bower_components/CanJS/can.construct.super.js',
        'bower_components/CanJS/can.construct.proxy.js',
        'bower_components/CanJS/can.control.plugin.js',
        // 'bower_components/CanJS/can.stache.js' // Если нужна шаблонизация на клиенте
    ],
    /**
     * Все остальные javascript плагины
     */
    vendor: [
        'bower_components/fastclick/lib/fastclick.js'
    ],
    /**
     * Свои скрипты, сначала подключается main.js, затем все остальные
     */
    main: [
        'src/js/main.js',
        'src/js/**/*.js'
    ]
};

gulp.task('scripts-bower', function () {
    // Сборка ядра проекта
    gulp.src(src.core)
        .pipe($.concat('core.js'))
        .pipe(gulp.dest(gulp.destPath + '/js/'));

    // Сборка модернайзера
    // modernizr.build(
    // 	{
    // 		'classPrefix': 'modern-',
    // 		'enableJSClass' : true,
    // 		"options" : [
    // 			"setClasses",
    // 			"html5shiv"
    // 		],
    // 		"feature-detects": [
    // 			"css/filters",
    // 		]
    // 	},
    // 	function (result) {
    // 		require('fs').writeFileSync(gulp.destPath + '/js/modernizr.js', result);
    // 	}
    // );

    // Сборка плагинов
    gulp.src(src.vendor)
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest(gulp.destPath + '/js/'));
});

gulp.task('scripts-main', function (sources) {
    sources = sources || false;

    // Сборка пользовательских скриптов
    return gulp.src(src.main)
        .pipe($.if(sources, $.sourcemaps.init()))
        .pipe($.concat('main.js'))
        .pipe($.if(sources, $.sourcemaps.write()))
        .pipe(gulp.dest(gulp.destPath + '/js/'))
        .pipe(reload({stream: true}));
});
