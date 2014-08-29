var homeCtrl = angular.module('homeCtrl', []);

homeCtrl.controller("homeCtrl", function($scope) {

	$scope.showCarousel = false;
	$scope.showBlurb = false;

	$scope.$on('navigateAway', function() {
		$scope.showCarousel = false;
		$scope.showBlurb = false;
	});

	console.log("homeCtrl loaded");
});
