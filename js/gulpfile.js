var gulp = require('gulp');
var autowatch = require('gulp-autowatch');
var livereload = require('gulp-livereload');

var tasks = {
	css: '../css/*.css',
	html: '../html/*.html',
}
gulp.task('watch', function() {
	livereload.listen();
	autowatch(gulp, tasks);
})
gulp.task('default', ['watch'], function() {

});