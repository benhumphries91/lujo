'use strict';

var gulp = require('gulp');
// SASS
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
// JAVASCRIPT
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
// IMAGE OPTIMIZATION
var imagemin = require('gulp-imagemin');



gulp.task('SASS Compiled', function () {
	gulp.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))

	.pipe(gulp.dest('./dist/assets/css/'))
});


gulp.task('scripts', function() {
	return gulp.src(['./src/scripts/**/!(app.js)*.js'])
			.pipe(concat('main.js'))
			.pipe(rename('main.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dist/assets/js/'));
});

gulp.task('app_js', function() {
	return gulp.src('./src/scripts/**/app.js')
			.pipe(concat('app.js'))
			.pipe(rename('app.min.js'))
			.pipe(uglify({mangle: false}))
			.pipe(gulp.dest('./dist/assets/js/'));
});


gulp.task('images', function(){
	return gulp.src('/src/images/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/assets/images'))
});


gulp.task('default', function () {
	gulp.watch('./src/sass/**/*.scss', ['SASS Compiled']);
	gulp.watch('./src/scripts/**/!(app.js)*.js', ['scripts']);
	gulp.watch('./src/scripts/**/app.js', ['app_js']);
	gulp.watch('./src/images/**/*.+(png|jpg|jpeg|gif|svg)', ['images']);
});