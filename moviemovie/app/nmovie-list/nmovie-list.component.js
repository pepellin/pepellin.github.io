function NmovieListController($http) {
  var self = this;
  var movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2d2ec1c3a401007b7c59f97960889607';
  $http.get(movieUrl).then(function(response) {
    self.movies = response.data.results.slice(0, 8);
  });
}

angular.
  module('nmovieList').
  component('nmovieList', {
    templateUrl: 'templates/movie-list.template.html',
    controller: ['$http', NmovieListController]
  });