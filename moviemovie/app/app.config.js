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
          template: '<movie-detail></movie-detail>'
        }).
        otherwise('/');
    }
  ]);