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
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'], // if it finds those endings..
                    dest: 'public/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['sass, htmlmin, imagemin']);
};