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

    watch: {
        scripts: {
          files: ['**/*.scss'],
          tasks: ['sass'],
        },
    }

  });

// new tasks to checkout: jshint, concat, uglify


  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('doubledown', ['sass', 'watch']);

};
