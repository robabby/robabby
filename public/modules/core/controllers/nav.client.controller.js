'use strict';

angular.module('core').controller('NavController', ['$scope', '$window',
	function($scope, $window) {

		var $ = $window.jQuery;
		var $nav = $('#global-nav');
		var $main = $('[role="main"]');

		$scope.isActive = false;

		$scope.triggerNav = function() {
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
	}
]);
