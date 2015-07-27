module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: true
            },
            build: {
                files: {
                    'bundle/core.js': [
                        'src/jquery-1.10.2.min.js',
                        'src/jQueryMobile1_3_1_Custom.min.js',
                        'src/jQueryEasingv1_3.min.js',
                        'src/jquery.animateenhancedplugin-1_02.min.js'
                    ],
                    'bundle/extra.js': [
                        'src/os-inspectlet.min.js',
                        'src/common.min.js',
                        'src/jquery.panelslider.min.js',
                        'src/home-parallax.min.js',
                        'src/jquery.powertip.min.js',
                        'src/os-ws-popup.min.js',
                        'src/carousel.min.js',
                        'src/jquery.sticky.min.js',
                        'src/jquery.actual.min.js',
                        'src/isotope.pkgd.min.js',
                        'src/jquery.magnific-popup.min.js',
                        'src/imagelightbox.min.js',
                        'src/jquery.ba-hashchange.min.js',
                        'src/jquery.swiftype.search.min.js',
                        'src/jquery.swiftype.autocomplete.min.js',
                        'src/os-swiftype.min.js',
                        'src/jquery.snippet.min.js',
                        'src/os-olark.min.js',
                        'src/jQuery.succinct.min.js',
                        'src/jquery.zaccordion.min.js',
                        'src/jquery.unveil.min.js'
                    ]
                }
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['uglify']);
};
