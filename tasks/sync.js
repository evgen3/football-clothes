'use strict';
/**
 * Синхронизация состояния проекта на диске и в браузере, а так же между браузерами
 */
var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	$ = require('gulp-load-plugins')();

gulp.task('init-sync', function () {
	return browserSync({
		server: {
			baseDir: gulp.destPath
		}
	});
});
