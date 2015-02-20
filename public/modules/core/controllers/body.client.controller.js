'use strict';

angular.module('core').controller('BodyController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication;
    $scope.elementStates = {};

    if($scope.authentication.user) {
      $scope.elementStates.topBarActive = true;
    } else {
      $scope.elementStates.topBarActive = false;
    }
  }
]);
