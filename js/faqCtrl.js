var faqCtrl = angular.module('faqCtrl', ['angular-inview']);

faqCtrl.controller("faqCtrl", function($scope) {

	$scope.showFAQ = false;

	$scope.$on('navigateAway', function(){
		$scope.showFAQ = false;
	});

	console.log("faqCtrl loaded");
});
