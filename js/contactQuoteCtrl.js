var contactQuoteCtrl = angular.module('contactQuoteCtrl', []);

contactQuoteCtrl.controller("contactQuoteCtrl", function($scope) {

	$scope.contactInfoInView = false;
	$scope.contactBlurbInView = false;

	$scope.$on('navigateAway', function(){
		$scope.contactInfoInView = false;
		$scope.contactBlurbInView = false;
	});

	console.log("contactQuoteCtrl loaded");
});
