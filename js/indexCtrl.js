var indexCtrl = angular.module('indexCtrl', ['ngRoute', 'duParallax']);

indexCtrl.controller('indexCtrl', function($scope, $location, parallaxHelper) {

	switch($location.$$path){
		case '/home':
			$scope.navSelection = 0;
			break;
		case '/media':
			$scope.navSelection = 1;
			break;
		case '/repertoire':
			$scope.navSelection = 2;
			break;
		case '/members':
			$scope.navSelection = 3;
			break;
		case '/weddings':
			$scope.navSelection = 4;
			break;
		case '/contact_quote':
			$scope.navSelection = 5;
			break;
		default:
			$scope.navSelection = 0;
	}

	$scope.background = parallaxHelper.createAnimator(-0.75);
	$scope.title = parallaxHelper.createAnimator(-0.3);

	$scope.setNavSelection = function(selection){
		$scope.navSelection = selection;
	}

	console.log("indexCtrl loaded");
});
