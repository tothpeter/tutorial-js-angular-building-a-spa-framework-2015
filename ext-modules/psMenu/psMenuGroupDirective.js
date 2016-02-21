'use strict';

angular.module('psMenu').directive('psMenuGroup', function() {
  return {
    require: '^psMenu',
    transclude: true,
    scope: {
      label: '@',
      icon: '@'
    },
    templateUrl: 'ext-modules/psMenu/psMenuGroupTemplate.html',
    link: function(scope, el, attr, ctrl) {
      scope.isOpen = false;

      scope.isVertical = function() {
        return ctrl.isVertical();
      };

      // scope.closeMenu = function() {
      //   scope.isOpen = false;
      // }

      scope.clicked = function() {
        scope.isOpen = !scope.isOpen;
      }
    }
  };
});
