angular.
  module('movieApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: 'moviemovie.html'
        }).
        when('/pmovies/:id', {
          template: '<pmovie-detail></pmovie-detail>'
        }).
        otherwise('/');
    }
  ]);
