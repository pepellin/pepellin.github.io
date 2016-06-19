angular.
  module('core').
  filter('fullyear', function() {
    return function(input) {
      return input.substring(0, 4);
    };
  });