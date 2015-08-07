module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.  
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    
                },
                files: {
                    'home-page/home.css': [
                        'home-page/os-font-cleaned.css',
                        'home-page/bootstrap-base-cleaned.css',
                        'home-page/website-cleaned.css',
                        'home-page/website-header-cleaned.css',
                        'home-page/website-footer-cleaned.css'
                    ],
                    'home-page/home-responsive.css': [
                        'home-page/os-font-cleaned.css',
                        'home-page/bootstrap-base-cleaned.css',
                        'home-page/website-cleaned.css',
                        'home-page/website-header-cleaned.css',
                        'home-page/website-footer-cleaned.css'
                    ]
                }
            }
        }
    });
    // Default task.  
    grunt.registerTask('default', ['cssmin']);
};
