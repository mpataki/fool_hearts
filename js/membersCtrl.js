var membersCtrl = angular.module('membersCtrl', []);

membersCtrl.controller("membersCtrl", function($scope) {

	$scope.membersInView = false;
	
	$scope.memberZoomed = -1; // signals no member hovered on
	$scope.inTransition = false;
	memberToZoom = -1;	// used to zoom after another un-zooms. -1 for no one.
	
	$scope.enter = function(i) {
		if ( !$scope.inTransition ) $scope.memberZoomed = i;
		else memberToZoom = i;
	}

	$scope.leave = function() {
		$scope.memberZoomed = -1;
		$scope.inTransition = true;
		setTimeout(function(){
			$scope.memberZoomed = memberToZoom;
			memberToZoom = -1;
			$scope.inTransition = false;
			$scope.$apply();
		}, 350);
	}

	$scope.$on('navigateAway', function(){
		$scope.membersInView = false;
	});

	console.log("membersCtrl loaded");
});
