module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			all: {
				files: ['../html/*.html', '../css/*.css','../../tuuj/aparta.html'],
				options: {
					livereload: true
				}
			}
		}
	})
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
}