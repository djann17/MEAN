var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var watch = require('gulp-watch');
//gulp.task("comprime", tareasPaComprimir);

function tareasPaComprimir(){
	var glob=gulp.src(["sumar.js", "restar.js"]);
	glob.pipe(concat("cojones.min.js")).pipe(uglify()).pipe(gulp.dest("./"));
	
}
gulp.task("default", espia);
function espia(){
	gulp.watch("./*.js", function(){
		gulp.src(["sumar.js","restar.js"]).pipe(concat("cojones.min.js")).pipe(uglify()).pipe(gulp.dest("./"));
		
	});
}