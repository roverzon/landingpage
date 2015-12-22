'use strict';
const gulp 		= require('gulp');
const nodemon 	= require('gulp-nodemon');

gulp.task('dev:server',() => {
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['ng*','gulp*','assets*']
	});
});