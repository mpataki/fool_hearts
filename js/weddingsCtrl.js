var weddingsCtrl = angular.module('weddingsCtrl', ['angular-inview']);

weddingsCtrl.controller("weddingsCtrl", function($scope) {

	$scope.CheckboxItemInView = [false, false, false, false, false, false, false];
	$scope.weddingBlurbIn = false;
	$scope.checklistIn = false;

	$scope.$on('navigateAway', function(){
		$scope.weddingBlurbIn = false;
		$scope.checklistIn = false;
		$scope.CheckboxItemInView = [false, false, false, false, false, false, false];
	});

	console.log("weddingsCtrl loaded");
});
