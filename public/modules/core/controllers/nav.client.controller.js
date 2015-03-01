'use strict';

angular.module('core').controller('NavController', ['$scope', '$window',
	function($scope, $window) {
		
		var $ = $window.jQuery;

		$scope.isActive = false;

		$scope.triggerNav = function() {
			var $el = $('#global-nav'),
					activeClass = 'is-open';

			if(!$scope.isActive) {
				$scope.isActive = true;
				$el.addClass(activeClass);
			} else {
				$scope.isActive = false;
				$el.removeClass(activeClass);
			}
		};
	}
]);
