'use strict';

angular.module('app').directive('wwaDashboard', [function() {
  return {
    scope: {
    },
    template: '<ps-dashboard></ps-dashboard>',

    link: function(scope) {

      scope.title = 'Sample Dashboard Title';

      scope.widgetDefinitions = [
        {
          title: 'Temperature',
          settings: {
            sizeX: 3,
            sizeY: 3,
            minSizeX: 2,
            minSizeY: 2,
            template: '<wwa-temperature></wwa-temperature>',
            widgetSettings: {
              id: 1000,
              templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
              controller: 'wwaSelectLocationController'
            }
          }
        },
        {
          title: 'Inventory',
          settings: {
            sizeX: 5,
            sizeY: 3,
            minSizeX: 2,
            minSizeY: 2,
            template: '<wwa-inventory></wwa-inventory>',
            widgetSettings: {
              id: 1002,
              templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
              controller: 'wwaSelectLocationController'
            }
          }
        },
        {
          title: 'Employee',
          settings: {
            sizeX: 5,
            sizeY: 3,
            minSizeX: 2,
            minSizeY: 2,
            template: '<wwa-employee></wwa-employee>',
            widgetSettings: {
              id: 5000,
              templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
              controller: 'wwaSelectEmployeeController'
            }
          }
        }
      ];

      scope.gridsterOpts = {
        columns: 12,
        margins: [20, 20],
        outerMargin: false,
        pushing: true,
        floating: true,
        swapping: false
      };

      scope.widgets = [
        {
          title: 'First',
          sizeX: 3,
          sizeY: 3,
          minSizeX: 2,
          minSizeY: 2,
          row: 0,
          col: 0,
          template: '<wwa-temperature></wwa-temperature>',
          widgetSettings: {
            id: 1000,
            templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
            controller: 'wwaSelectLocationController'
          }
        },
        {
          title: 'Second',
          sizeX: 5,
          sizeY: 3,
          row: 0,
          col: 5,
          template: '<wwa-employee></wwa-employee>',
          widgetSettings: {
              id: 5001,
              templateUrl: 'app/dialogs/wwaSelectEmployeeTemplate.html',
              controller: 'wwaSelectEmployeeController'
          }
        },
        {
          title: 'Third',
          sizeX: 5,
          sizeY: 3,
          row: 3,
          col: 5,
          template: '<wwa-inventory></wwa-inventory>',
          widgetSettings: {
              id: 1002,
              templateUrl: 'app/dialogs/wwaSelectLocationTemplate.html',
              controller: 'wwaSelectLocationController'
          }
        }
      ];
    }
  };
}]);
