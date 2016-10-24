'use strict';
/**
 * Отслеживание изменений проекта
 */
var gulp = require('gulp');

gulp.task('watch', function() {
	//gulp.watch(['src/sprite/*.png'], {debounceDelay: 2000}, ['sprite-normal']);
	gulp.watch(['src/sprite/*@2x.png'], {debounceDelay: 2000}, ['sprite-retina']);

	//gulp.watch('bower_components/**/*.css', ['styles-bower']);
	gulp.watch('src/stylus/**/*.styl', ['styles-main']);

	//gulp.watch('bower_components/**/*.js', ['scripts-bower']);
	gulp.watch('src/js/**/*.js', ['scripts-main']);
	
	gulp.watch('src/templates/**/*', ['templates']);
	gulp.watch('src/images/**/*', ['copy-images']);
	gulp.watch('src/fonts/**/*', ['copy-fonts']);
});
