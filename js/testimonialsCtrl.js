var testimonialsCtrl = angular.module('testimonialsCtrl', ['angular-inview']);

testimonialsCtrl.controller("testimonialsCtrl", function($scope) {

	$scope.showTestimonials = false;

	$scope.$on('navigateAway', function(){
		$scope.showTestimonials = false;
	});

	console.log("testimonialsCtrl loaded");
});
