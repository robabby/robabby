'use strict';

angular.module('core').directive('fullHeight', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Full height directive logic
				// ...

				element.text('this is the fullHeight directive');
			}
		};
	}
]);