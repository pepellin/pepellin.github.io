angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'templates/movie-detail.template.html',
    controller: ['$routeParams',
      function MovieDetailController($routeParams) {
        this.movieId = $routeParams.id;
      }
    ]
  });