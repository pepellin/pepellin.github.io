function MovieDetailController($routeParams) {
  this.movieId = $routeParams.id;
}

angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'templates/movie-detail.template.html',
    controller: ['$routeParams', MovieDetailController]
  });

//   function NmovieListController($http) {
//   var self = this;
//   var movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2d2ec1c3a401007b7c59f97960889607';
//   $http.get(movieUrl).then(function(response) {
//     self.movies = response.data.results.slice(0, 12);
//   });
// }

// angular.
//   module('nmovieList').
//   component('nmovieList', {
//     templateUrl: 'templates/movie-list.template.2.html',
//     controller: ['$http', NmovieListController]
//   });