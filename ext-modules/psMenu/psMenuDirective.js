'use strict';

angular.module('psMenu').directive('psMenu', function() {
  return {
    transclude: true,
    controller: 'psMenuController',
    templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
    link: function(scope, el, attr) {

    }
  };
});
