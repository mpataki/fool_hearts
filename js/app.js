var FoolHeartsApp = angular.module('FoolHeartsApp', [
	'ngRoute',
  'duParallax',
	'indexCtrl',
  'homeCtrl',
  'reelCtrl',
  'testimonialsCtrl',
  'repertoireCtrl',
  'membersCtrl',
  'weddingsCtrl',
  'faqCtrl',
  'contactQuoteCtrl',
  'angular-inview'
]);

FoolHeartsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      when('/reel', {
        templateUrl: 'partials/reel.html',
        controller: 'reelCtrl'
      }).
      when('/testimonials', {
        templateUrl: 'partials/testimonials.html',
        controller: 'testimonialsCtrl'
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
      when('/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'faqCtrl'
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
