module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    // Wipe out previous builds and test reporting.
    clean: ["dist/"],

    // Run your source code through JSHint's defaults.
    jshint: ["app/**/*.js"],

    // This task uses James Burke's excellent r.js AMD builder to take all
    // modules and concatenate them into a single file.
    requirejs: {
      release: {
        options: {
          mainConfigFile: "app/config.js",
          generateSourceMaps: true,
          include: ["main"],
          out: "dist/source.min.js",
          optimize: "uglify2",

          // Since we bootstrap with nested `require` calls this option allows
          // R.js to find them.
          findNestedDependencies: true,

          // Include a minimal AMD implementation shim.
          name: "almond",

          // Setting the base url to the distribution directory allows the
          // Uglify minification process to correctly map paths for Source
          // Maps.
          baseUrl: "dist/app",

          // Wrap everything in an IIFE.
          wrap: true,

          // Do not preserve any license comments when working with source
          // maps.  These options are incompatible.
          preserveLicenseComments: false
        }
      }
    },

    // This task simplifies working with CSS inside Backbone Boilerplate
    // projects.  Instead of manually specifying your stylesheets inside the
    // HTML, you can use `@imports` and this task will concatenate only those
    // paths.
    styles: {
      // Out the concatenated contents of the following styles into the below
      // development file path.
      "dist/styles.css": {
        // Point this to where your `index.css` file is location.
        src: "app/styles/index.css",

        // The relative path to use for the @imports.
        paths: ["app/styles"],

        // Rewrite image paths during release to be relative to the `img`
        // directory.
        forceRelative: "/app/img/"
      }
    },

    // Minify the distribution CSS.
    cssmin: {
      release: {
        files: {
          "dist/styles.min.css": ["dist/styles.css"]
        }
      }
    },

    server: {
      options: {
        host: "0.0.0.0",
        port: 8000
      },

      development: {},

      release: {
        options: {
          prefix: "dist"
        }
      },

      test: {
        options: {
          forever: false,
          port: 8001
        }
      }
    },

    processhtml: {
      release: {
        files: {
          "dist/index.html": ["index.html"]
        }
      }
    },

    // Move vendor and app logic during a build.
    copy: {
      release: {
        files: [
          { src: ["app/**"], dest: "dist/" },
          { src: "vendor/**", dest: "dist/" }
        ]
      }
    },

    compress: {
      release: {
        options: {
          archive: "dist/source.min.js.gz"
        },

        files: ["dist/source.min.js"]
      }
    }
  });

  // Grunt contribution tasks.
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-compress");

  // Third-party tasks.
  grunt.loadNpmTasks("grunt-processhtml");

  // Grunt BBB tasks.
  grunt.loadNpmTasks("grunt-bbb-server");
  grunt.loadNpmTasks("grunt-bbb-requirejs");
  grunt.loadNpmTasks("grunt-bbb-styles");

  // When running the default Grunt command, just lint the code.
  grunt.registerTask("default", [
    "clean",
    "jshint",
    "processhtml",
    "copy",
    "requirejs",
    "styles",
    "cssmin",
  ]);
};
