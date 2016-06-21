function MovieDetailController($routeParams, $http) {
  var self = this;
  self.movieId = $routeParams.id;
  var movieUrl = 'https://api.themoviedb.org/3/movie/' + self.movieId +'?api_key=2d2ec1c3a401007b7c59f97960889607';
  $http.get(movieUrl).then(function(response) {
    self.movieInfo = response.data;
  });
  var videoUrl = 'https://api.themoviedb.org/3/movie/' + self.movieId +'/videos?api_key=2d2ec1c3a401007b7c59f97960889607';
  $http.get(videoUrl).then(function(response) {
    self.videoId = response.data.results[0].key;

  });
}

angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'templates/movie-detail.template.1.html',
    controller: ['$routeParams', '$http', MovieDetailController]
  });