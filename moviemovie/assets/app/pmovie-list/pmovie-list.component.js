angular.
  module('pmovieList').
  component('pmovieList', {
    templateUrl: 'assets/app/pmovie-list/phone-list.template.html',
    controller: function PmovieListController($http) {
      var self = this;
      self.orderProp = '-popularity';
      $http.get('assets/app/pmovies.json').then(function(response) {
        self.pmovies = response.data.results.slice(1, 21);
      });
    }
  });