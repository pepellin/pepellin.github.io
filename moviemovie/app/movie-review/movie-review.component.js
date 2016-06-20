function MovieReviewController($routeParams, $http) {
  var self = this;
  self.movieId = $routeParams.id;
  var movieUrl = 'https://api.themoviedb.org/3/movie/' + self.movieId +'/reviews?api_key=2d2ec1c3a401007b7c59f97960889607';
  $http.get(movieUrl).then(function(response) {
    self.movieReviews = response.data;
  });
}

angular.
  module('movieReview').
  component('movieReview', {
    templateUrl: 'templates/movie-detail.template.2.html',
    // template: '{{$ctrl.movieReviews}}',
    controller: ['$routeParams', '$http', MovieReviewController]
  });
