'use strict';

angular.module('app').directive('wwaTemperatureDirective',
 [
   'dataService',
   function(dataService) {
      return {
        templateUrl: 'app/widgets/wwaTemperature/wwaTemperatureTemplate.html',
        link: function(scope, el, attrs) {

        }
      };
    }
  ]
);
