var indexCtrl = angular.module('indexCtrl', ['duParallax']);

indexCtrl.controller('indexCtrl', function($scope, parallaxHelper) {

	$scope.background = parallaxHelper.createAnimator(-0.75);
	$scope.title = parallaxHelper.createAnimator(-0.3);

	console.log("indexCtrl loaded");
});
