var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var sass = require('gulp-sass');

nodemon = require('gulp-nodemon'); 
var jshint = require('gulp-jshint');

var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

,
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}

};

// JS hint task
gulp.task('jshint', function () {
    gulp.src('./src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass',

]);

gulp.task('default', ['watch', 'runKeystone']);

// Basic usage
gulp.task('lint', function () {
    gulp.src('./**/*.js')
      .pipe(jshint())
})

gulp.task('develop', function () {
    var stream = nodemon({
        script: 'keystone.js'
            , ext: 'html js'
            , ignore: ['ignored.js']
            , tasks: ['lint']
    })

    stream
        .on('restart', function () {
            console.log('restarted!')
        })
        .on('crash', function () {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)  // restart the server in 10 seconds 
        })
})
