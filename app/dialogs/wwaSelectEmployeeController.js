'use strict';

angular.module('app').controller('wwaSelectEmployeeController',
  [
    '$scope', 'dataService',
    function($scope, dataService) {
      $scope.isLoaded = false;

      dataService.getEmployees().then(function(employees) {
        $scope.employees = employees;
        $scope.isLoaded = true;

        $scope.selectedEmployee = employees.find(function(location) {
          return location.id === $scope.item.widgetSettings.id;
        });
      });

      $scope.saveSettings = function() {
        $scope.item.widgetSettings.id = $scope.selectedEmployee.id;
        $scope.$parent.selectedEmployee = $scope.selectedEmployee;
        $scope.$close();
      };
    }
  ]
);
