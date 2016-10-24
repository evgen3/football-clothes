'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv),
	requireDir = require('require-dir'),
	sequence = require('run-sequence');

gulp.destPath = 'dist';

requireDir('./tasks', { recurse: true });

/* ==============================================
 Default task
 Starts tasks and adds file watchers
 ============================================== */

var buildCommands = [
	['copy-bower-images', 'sprite-retina'],
	['styles-bower', 'styles-main'],
	['scripts-bower', 'scripts-main'],
	['templates', 'copy-images', 'copy-fonts']
];

gulp.task('build', function() {
	return sequence.apply(this, buildCommands);
});

gulp.task('default', function () {
	return sequence.apply(this, buildCommands.concat([
		'watch',
		'init-sync' // Если нужна реалтайм синхронизация проекта в браузере
	]));
});
