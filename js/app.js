var FoolHeartsApp = angular.module('FoolHeartsApp', [
	'ngRoute',
	'indexCtrl',
  'homeCtrl',
  'mediaCtrl',
  'repertoireCtrl',
  'membersCtrl',
  'yourDayCtrl',
  'contactQuoteCtrl',
]);

FoolHeartsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      when('/media', {
        templateUrl: 'partials/media.html',
        controller: 'mediaCtrl'
      }).
      when('/repertoire', {
        templateUrl: 'partials/repertoire.html',
        controller: 'repertoireCtrl'
      }).
      when('/members', {
        templateUrl: 'partials/members.html',
        controller: 'membersCtrl'
      }).
      when('/your_day', {
        templateUrl: 'partials/your_day.html',
        controller: 'yourDayCtrl'
      }).
      when('/contact_quote', {
        templateUrl: 'partials/contact_quote.html',
        controller: 'contactQuoteCtrl'
      }).
      otherwise({
        redirectTo: 'partials/home.html',
        controller: 'homeCtrl'
      });
  }
]);
