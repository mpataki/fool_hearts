var weddingsCtrl = angular.module('weddingsCtrl', ['angular-inview']);

weddingsCtrl.controller("weddingsCtrl", function($scope) {

	$scope.elmInView = [false, false, false, false, false, false, false, false];

	console.log("weddingsCtrl loaded");
});
