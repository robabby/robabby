'use strict';

angular.module('core').controller('BodyController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.authentication = Authentication;
    $scope.elementStates = {};
    $scope.elementStates.topBarActive = true;
  }
]);
