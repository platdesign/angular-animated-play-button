'use strict';

var gulp = require('gulp');



// Load sass generator
var sass = require('pd-gulp-sass')(gulp);

sass.register({
	options: {
		banner: {
			file: './gulp/banner.txt'
		}
	},
	assets: {
		src: './src/style.scss',
		dest: './build',
	}
},{
	watch: {
		watch: './src/**/*.scss'
	}
});



// Load js generator
var js = require('pd-gulp-js')(gulp);

js.register({
	options: {
		banner: {
			file: './gulp/banner.txt'
		}
	},
	assets: {
		src: './src/btn-play.js',
		dest: './build',
		external: ['angular']
	}
});

