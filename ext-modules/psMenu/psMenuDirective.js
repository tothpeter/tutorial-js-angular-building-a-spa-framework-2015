'use strict';

angular.module('psMenu').directive('psMenu', ['$timeout', function($timeout) {
  return {
    scope: {

    },
    transclude: true,
    controller: 'psMenuController',
    templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
    link: function(scope, el, attr) {
      $timeout(function() {
        var item = el.find('.ps-selectable-item:first');
        item.trigger('click');
      });
    }
  };
}]);
