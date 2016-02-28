angular.module('app').config(function($provide) {
  $provide.decorator("$exceptionHandler", ["$delegate", function($delegate) {
    return function(expception, cause) {
      $delegate(expception, cause);
      // alert(expception.message);
    };
  }])
})
