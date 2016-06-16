angular.
  module('pmovieList').
  component('pmovieList', {
    templateUrl: 'assets/app/pmovie-list/phone-list.template.html',
    controller: function PmovieListController() {
      this.pmovies = [
        {
          title: 'Nexus S',
          overview: 'Fast just got faster with Nexus S.'
        }, {
          title: 'Motorola XOOM™ with Wi-Fi',
          overview: 'The Next, Next Generation tablet.'
        }, {
          title: 'MOTOROLA XOOM™',
          snioverviewppet: 'The Next, Next Generation tablet.'
        },
        {
          title: 'Nexus S',
          overview: 'Fast just got faster with Nexus S.'
        }
      ];
    }
  });