module.exports = function (grunt) {  
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
                    'bundle/site.min.css': [  
                        'src/bootstrap-base.css',  
                        'src/os-font.css',  
                        'src/website.css', 
                        'src/website-header.css', 
                        'src/website-footer.css'
                        ]  
                }  
            }  
        } 
    });  
    // Default task.  
    grunt.registerTask('default', ['cssmin']);  
};