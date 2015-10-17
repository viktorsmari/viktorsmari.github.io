var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync({
		server:{
			baseDir:"./"
		}
	})
});


gulp.task('default', function() {
	browserSync.init({
		server:{
			baseDir:'./'
			}
		});
	gulp.watch(['*.html', '*.css', '*.js'], {cwd:'.'}, browserSync.reload);
})
