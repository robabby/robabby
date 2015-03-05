'use strict';

angular.module('core').controller('BodyController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication;
    $scope.elementStates = {};

    // Top bar visibility
    if($scope.authentication.user) {
      $scope.elementStates.topBarActive = true;
    } else {
      $scope.elementStates.topBarActive = false;
    }

    // Global nav visibility

  }
]);
