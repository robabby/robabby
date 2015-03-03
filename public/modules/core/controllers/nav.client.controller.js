'use strict';

angular.module('core').controller('NavController', ['$scope', '$window',
	function($scope, $window) {

		var $ = $window.jQuery;
		var $nav = $('#global-nav');
		var $navbar = $('.nav-bar');
		var $main = $('[role="main"]');

		$scope.isActive = false;

		$scope.navTrigger = function() {
			var activeClass = 'is-open';

			if(!$scope.isActive) {
				$scope.isActive = true;
				$nav.addClass(activeClass);
				$main.addClass(activeClass);
			} else {
				$scope.isActive = false;
				$nav.removeClass(activeClass);
				$main.removeClass(activeClass);
			}
		};

		$(window).on('scroll', function() {
			var y = $(this).scrollTop(),
					h = $(window).height();

			if (y > h - 200) {
				$navbar.addClass('active');
			} else {
				$navbar.removeClass('active');
			}
		});
	}
]);
