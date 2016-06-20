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
    console.log(self.videoId);

  });
}

angular.
  module('movieDetail').
  component('movieDetail', {
    templateUrl: 'templates/movie-detail.template.1.html',
    controller: ['$routeParams', '$http', MovieDetailController]
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