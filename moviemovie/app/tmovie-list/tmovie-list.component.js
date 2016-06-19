function TmovieListController($http) {
  var self = this;
  var movieUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2d2ec1c3a401007b7c59f97960889607';
  self.orderProp = '-vote_average';
  $http.get(movieUrl).then(function(response) {
    self.movies = response.data.results.slice(0, 12);
  });
}

angular.
  module('tmovieList').
  component('tmovieList', {
    templateUrl: 'templates/movie-list.template.1.html',
    controller: ['$http', TmovieListController]
  });