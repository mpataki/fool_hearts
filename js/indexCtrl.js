var indexCtrl = angular.module('indexCtrl', ['duParallax']);

indexCtrl.controller('indexCtrl', function($scope, parallaxHelper) {

	$scope.background = parallaxHelper.createAnimator(-0.7);

	console.log("indexCtrl loaded");
});
