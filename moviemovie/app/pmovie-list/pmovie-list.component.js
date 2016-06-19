function PmovieListController($http) {
  var self = this;
  self.movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=2d2ec1c3a401007b7c59f97960889607';
  self.orderProp = '-popularity';
  $http.get(self.movieUrl).then(function(response) {
    self.movies = response.data.results.slice(0, 12);
  });
}

angular.
  module('pmovieList').
  component('pmovieList', {
    templateUrl: 'templates/movie-list.template.1.html',
    controller: ['$http', PmovieListController]
  });