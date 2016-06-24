function MovieSearchController($http) {
    var self = this;
    self.res;
    self.movieTitle;
    self.imdbMovieId;
    self.tmdbMovieInfo;

    self.getImdbIdByTitle = function() {
        $http.get('http://www.omdbapi.com/?t=' + self.movieTitle).then(function(response) {
            if (self.movieTitle !== undefined && self.movieTitle !== '') {
                self.imdbMovieId = response.data.imdbID;
                if (self.imdbMovieId) {
                    console.log(self.imdbMovieId);
                    self.getMovieFromTmdb();
                }
            }
        });
    };

    self.getMovieFromTmdb = function() {
        self.tmdbUrl = 'https://api.themoviedb.org/3/find/' + self.imdbMovieId + '?external_source=imdb_id&api_key=2d2ec1c3a401007b7c59f97960889607';
        $http.get(self.tmdbUrl).then(function(response) {
            self.tmdbMovieInfo = response.data.movie_results;
            console.log(self.tmdbMovieInfo);
            self.res = self.tmdbMovieInfo;
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