angular.
  module('movieApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: 'templates/movie-list.template.html'
        }).
        when('/movies/:id', {
          templateUrl: 'templates/movie-detail.template.html'
        }).
        otherwise('/');
    }
  ]);