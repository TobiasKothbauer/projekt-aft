module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'public/main.css': 'assets/scss/main.scss',       // 'destination': 'source'
                }
            }
        },
        htmlmin: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    collapseWhitespace: true,
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './index.html': 'src/index.html',       // 'destination': 'source'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['sass, htmlmin']);
};