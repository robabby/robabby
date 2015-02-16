'use strict';


angular.module('core').controller('HomeController', ['$scope', '$stateParams', '$location', 'Authentication', 'Posts',
	function($scope, $stateParams, $location, Authentication, Posts) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		$scope.posts = Posts;

		// Find a list of Posts
		$scope.find = function() {
			$scope.posts = Posts.query();
		};

		// Find existing Post
		$scope.findOne = function() {
			$scope.post = Posts.get({
				postId: $stateParams.postId
			});
		};
	}
]);
