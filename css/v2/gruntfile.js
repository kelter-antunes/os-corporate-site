module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'bundle/site.css': [
                        'src/os-font.min.css',
                        'src/bootstrap-base.min.css',
                        'src/website.min.css',
                        'src/website-header.min.css',
                        'src/website-footer.min.css'
                    ],
                    'bundle/site-responsive.css': [
                        'src/os-font.min.css',
                        'src/bootstrap-base-responsive.min.css',
                        'src/website.min.css',
                        'src/website-header.min.css',
                        'src/website-responsive.min.css',
                        'src/website-footer-responsive.min.css'
                    ]
                }
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['cssmin']);
};
