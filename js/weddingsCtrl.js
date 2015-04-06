var weddingsCtrl = angular.module('weddingsCtrl', ['angular-inview']);

weddingsCtrl.controller("weddingsCtrl", function($scope) {

	$scope.weddingBlurbIn = false;
	$scope.checklistIn = false;

	$scope.$on('navigateAway', function(){
		$scope.weddingBlurbIn = false;
		$scope.checklistIn = false;
	});

	console.log("weddingsCtrl loaded");
});
