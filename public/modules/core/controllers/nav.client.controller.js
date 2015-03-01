'use strict';

angular.module('core').controller('NavController', ['$scope', '$window',
	function($scope, $window) {

		var $ = $window.jQuery;
		var $el = $('#global-nav');

		$scope.isActive = false;

		$scope.triggerNav = function() {
			var activeClass = 'is-open';

			if(!$scope.isActive) {
				$scope.isActive = true;
				$el.addClass(activeClass);
			} else {
				$scope.isActive = false;
				$el.removeClass(activeClass);
			}
		};

		$(window).on('scroll', function() {

			if ($(window).scrollTop() > 100) {
				$el.addClass('active');
			} else {
				$el.removeClass('active');
			}
		});
	}
]);
