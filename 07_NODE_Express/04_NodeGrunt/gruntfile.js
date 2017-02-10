module.exports = function (grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			min:{
				src:"<%= pkg.name %>.js",
				dest:"<%= pkg.name %>.min.js"
			}
			
		},
		jshint:{
			all: ["Gruntfile.js", "./*.js"]
		},
		watch:{
			scripts:{
				files:["./*.js"],
				tasks:["jshint","uglify"],
				options:{
					spawn: false
				}
			}
		}

	});
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default",["uglify"]);
	grunt.registerTask("espia",["watch"]);
}