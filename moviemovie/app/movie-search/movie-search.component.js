function MovieSearchController($http) {
    var self = this;
    self.movieTitle;
    self.imdbMovieId;
    self.movieInfo;

    self.getImdbIdByTitle = function() {
        $http.get('http://www.omdbapi.com/?t=' + self.movieTitle).then(function(response) {
            if (self.movieTitle !== undefined && self.movieTitle !== '') {
                self.imdbMovieId = response.data.imdbID;
                if (self.imdbMovieId) {
                    self.getMovieFromTmdb();
                }
            }
        });
    };

    self.getMovieFromTmdb = function() {
        $http.get('https://api.themoviedb.org/3/find/' + self.imdbMovieId + '?external_source=imdb_id&api_key=2d2ec1c3a401007b7c59f97960889607').then(function(response) {
            self.movieInfo = response.data.movie_results[0];
            console.log(self.movieInfo);
            document.getElementById('no-display').style.display = "block";
            self.movieTitle = '';
        });
    };
}

angular.
  module('movieSearch').
  component('movieSearch', {
    templateUrl: 'templates/movie-search.template.html',
    controller: ['$http',MovieSearchController]
  });