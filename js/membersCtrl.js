var membersCtrl = angular.module('membersCtrl', []);

membersCtrl.controller("membersCtrl", function($scope) {

	$scope.membersInView = [false, false, false, false, false, false, false, false, false, false];

	$scope.$on('navigateAway', function(){
		$scope.membersInView = [false, false, false, false, false, false, false, false, false, false];
	});

	console.log("membersCtrl loaded");
});
