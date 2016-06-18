angular.
  module('movieApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<pmovie-list></pmovie-list>'
        }).
        when('/pmovies/:id', {
          template: '<pmovie-detail></pmovie-detail>'
        }).
        otherwise('/');
    }
  ]);
