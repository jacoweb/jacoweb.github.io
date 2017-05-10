module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                },
                files: {
                    'css/main.css': 'sass/main.scss',
                    'css/ie9.css': 'sass/ie9.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dev']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build-dev', ['sass:dev', 'watch']);
    grunt.registerTask('build-dist', ['sass:dist']);
};