'use strict';

var angular = global.angular;

var mod = module.exports = angular.module('pd.btn-play', []);


mod.directive('btnPlay', function() {
	return {
		restrict: 'A',
		link: function(scope, el, attr) {

			// Add btn-play class
			el.addClass('btn-play');

			// watch btnPlay-expression for changes
			scope.$watch(function() {
				return scope.$eval(attr.btnPlay);
			}, function(value, oldValue) {
				if(value === oldValue) { return; }
				changeState(value);
			});

			function changeState(value) {
				if(value) {
					el.addClass('btn-play-playing');
				} else {
					el.removeClass('btn-play-playing');
				}
			}

		}
	};
});
