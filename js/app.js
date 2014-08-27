var FoolHeartsApp = angular.module('FoolHeartsApp', [
	'ngRoute',
  'duParallax',
	'indexCtrl',
  'homeCtrl',
  'mediaCtrl',
  'repertoireCtrl',
  'membersCtrl',
  'weddingsCtrl',
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
      when('/weddings', {
        templateUrl: 'partials/weddings.html',
        controller: 'weddingsCtrl'
      }).
      when('/contact_quote', {
        templateUrl: 'partials/contact_quote.html',
        controller: 'contactQuoteCtrl'
      }).
      otherwise({
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      });
  }
]);
