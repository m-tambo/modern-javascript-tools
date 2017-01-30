module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true,
            outputStyle: 'compressed'
        },
        dist: {
            files: {
                'styles/styling.css': 'styles/styling.scss'
            }
        },
    },

  });

  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
