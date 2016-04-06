var reelCtrl = angular.module('reelCtrl', ['angular-inview']);

reelCtrl.controller("reelCtrl", function($scope) {

	$scope.showReel = false;

	$scope.$on('navigateAway', function(){
		$scope.showReel = false;
	});

	console.log("reelCtrl loaded");
});
