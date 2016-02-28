'use strict';

angular.module('psDashboard').directive('psWidgetBody',
  [
    '$compile', '$uibModal',
    function($compile, $uibModal) {
      return {
        templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
        link: function(scope, element, attrs) {
          var newElement = angular.element(scope.item.template);
          element.append(newElement);

          $compile(newElement)(scope);

          scope.close = function() {
            var itemIndex = scope.widgets.indexOf(scope.item);

            scope.widgets.splice(itemIndex, 1);
          }

          scope.settings = function() {
            var options = {
              templateUrl: scope.item.widgetSettings.templateUrl,
              controller: scope.item.widgetSettings.controller,
              scope: scope
            };

            $uibModal.open(options);
          };
        }
      };
    }
  ]
)
