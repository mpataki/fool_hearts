var membersCtrl = angular.module('membersCtrl', []);

membersCtrl.controller("membersCtrl", function($scope) {

	$scope.membersInView = false;
	
	$scope.memberZoomed = -1; // signals no member hovered on
	inTransition = false; // whether we are zooming out at the moment
	memberToZoom = -1;	// used to zoom after another un-zooms. -1 for no one.
	
	$scope.enter = function(i) {
		if ( !inTransition ) $scope.memberZoomed = i;
		else memberToZoom = i;
	}

	$scope.leave = function() {
		$scope.memberZoomed = -1;
		inTransition = true;
		setTimeout(function(){
			$scope.memberZoomed = memberToZoom;
			inTransition = false;
			$scope.$apply();
		}, 350);
	}

	$scope.$on('navigateAway', function(){
		$scope.membersInView = false;
	});

	console.log("membersCtrl loaded");
});
