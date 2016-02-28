'use strict';

angular.module('app').controller('wwaSelectLocationController',
  [
    '$scope', 'dataService',
    function($scope, dataService) {
      $scope.isLoaded = false;

      dataService.getLocations().then(function(locations) {
        $scope.locations = locations;
        $scope.isLoaded = true;

        $scope.selectedLocation = locations.find(function(location) {
          return location.id === $scope.item.widgetSettings.id;
        });
      });

      $scope.saveSettings = function() {
        $scope.item.widgetSettings.id = $scope.selectedLocation.id;
        $scope.$parent.selectedLocation = $scope.selectedLocation;
        $scope.$close();
      };
    }
  ]
);
