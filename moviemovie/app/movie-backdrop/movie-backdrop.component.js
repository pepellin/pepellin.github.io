function MovieBackdropController($routeParams, $http) {
  var self = this;
  self.movieId = $routeParams.id;
  var movieUrl = 'https://api.themoviedb.org/3/movie/' + self.movieId +'/images?api_key=2d2ec1c3a401007b7c59f97960889607';
  $http.get(movieUrl).then(function(response) {
    self.movieBackdrop = response.data;
  });
}

angular.
  module('movieBackdrop').
  component('movieBackdrop', {
    templateUrl: 'templates/movie-detail.template.2.html',
    controller: ['$routeParams', '$http', MovieBackdropController]
  });