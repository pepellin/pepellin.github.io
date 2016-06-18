function PmovieListController($http) {
  var self = this;
  self.orderProp = '-popularity';
  $http.get('app/pmovies.json').then(function(response) {
    self.pmovies = response.data.results.slice(1, 9);
  });
}

angular.
  module('pmovieList').
  component('pmovieList', {
    templateUrl: 'app/pmovie-list/pmovie-list.template.html',
    controller: ['$http', PmovieListController]
  });