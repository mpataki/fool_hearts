var indexCtrl = angular.module('indexCtrl', ['duParallax']);

indexCtrl.controller('indexCtrl', function($scope, parallaxHelper) {

	$scope.navSelection = 0;

	$scope.background = parallaxHelper.createAnimator(-0.75);
	$scope.title = parallaxHelper.createAnimator(-0.3);

	$scope.setNavSelection = function(selection){
		$scope.navSelection = selection;
	}

	console.log("indexCtrl loaded");
});
