var videosCtrl = angular.module('videosCtrl', ['angular-inview']);

videosCtrl.controller('videosCtrl', function($scope) {
	$scope.showVideos = false;

	$scope.$on('navigateAway', function(){
		$scope.showVideos = false;
	});

	console.log("videosCtrl loaded");
});
