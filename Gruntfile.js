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
    },

    concat: {
      dist: {
        src: ['src/foo.js', 'src/bar.js'],
        dest: 'dist/output.js'
      }
    },

    jshint: {
      beforeconcat: ['src/foo.js', 'src/bar.js'],
      afterconcat: ['dist/output.js']
    }

  });

// new tasks to checkout: jshint, concat, uglify


  // Load the grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('doubledown', ['sass', 'watch']);

};
