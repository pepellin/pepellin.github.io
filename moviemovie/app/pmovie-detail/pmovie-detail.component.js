angular.
  module('pmovieDetail').
  component('pmovieDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.pmovieId}}</span>',
    controller: ['$routeParams',
      function PmovieDetailController($routeParams) {
        this.pmovieId = $routeParams.id;
      }
    ]
  });