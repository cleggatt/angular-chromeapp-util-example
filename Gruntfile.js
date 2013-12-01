module.exports = function(grunt) {

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './app/js/lib'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['bower']);
};