var indexCtrl = angular.module('indexCtrl', ['ngRoute', 'duParallax']);

indexCtrl.controller('indexCtrl', function($scope, $rootScope, $location, parallaxHelper) {

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

	$scope.location = $location;	// again, weird that I have to do this to get access to the $location service inside the function below
	$scope.rootScope = $rootScope;
	$scope.setNavSelection = function(selection){
		if ($scope.navSelection == selection ) return;
		$scope.navSelection = selection;
		$scope.rootScope.$broadcast('navigateAway');
		setTimeout(
			function(){
				switch(selection){
					case 0:
						$scope.location.path('/home');
						break;
					case 1:
						$scope.location.path('/media');
						break;
					case 2:
						$scope.location.path('/repertoire');
						break;
					case 3:
						$scope.location.path('/members');
						break;
					case 4:
						$scope.location.path('/weddings');
						break;
					case 5:
						$scope.location.path('/contact_quote');
						break;
					default:
						$scope.location.path('/home');
				}
				$scope.$apply();
			}
		, 500);
	}

	console.log("indexCtrl loaded");
});
