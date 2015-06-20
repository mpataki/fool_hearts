var indexCtrl = angular.module('indexCtrl', ['ngRoute', 'duParallax']);

indexCtrl.controller('indexCtrl', function($scope, $rootScope, $location, $anchorScroll, parallaxHelper) {

	switch($location.$$path){
		case '/home':
			$scope.navSelection = 0;
			break;
		case '/testimonials':
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
		case '/faq':
			$scope.navSelection = 5;
			break;
		case '/contact_quote':
			$scope.navSelection = 6;
			break;
		default:
			$scope.navSelection = 0;
	}

	$scope.background = parallaxHelper.createAnimator(-0.75);
	$scope.title = parallaxHelper.createAnimator(-0.3);

	$scope.location = $location;	// again, weird that I have to do this to get access to the $location service inside the function below
	$scope.rootScope = $rootScope;
	$scope.anchorScroll = $anchorScroll;

	var navigate = function(selection){
		switch(selection){
			case 0:
				$scope.location.path('/home');
				break;
			case 1:
				$scope.location.path('/testimonials');
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
				$scope.location.path('/faq');
				break;
			case 6:
				$scope.location.path('/contact_quote');
				break;
			default:
				$scope.location.path('/home');
		}

		if ( $scope.location.hash() != 'content' ) {
			$scope.location.hash('content');
			$scope.anchorScroll();
		}
	}

	$scope.showSocialLink = function(network) {
		switch(network) {
			case 'twitter':
				window.open("https://twitter.com/intent/tweet?hashtags=foolhearts&original_referer=http%3A%2F%2Flocalhost%3A8888%2F&text=Fool%20Hearts&tw_p=tweetbutton&url=http%3A%2F%2Fwww.foolhearts.com", "", "width=580, height=438");
				break;
			case 'fb_page':
				window.open("https://www.facebook.com/foolhearts");
				break;
			case 'fb_like':
				window.open("https://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.foolhearts.com", "", "width=240, height=22");
				break;
			case 'pin':
				window.open("https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.foolhearts.com&media=http%3A//matpataki.com/dev/foolhearts/images/fh_pintrest_image.jpg&description=", "", "width=830, height=345");
				break;
			case 'g+':
				window.open("https://plus.google.com/share?url=http%3A%2F%2Fwww.foolhearts.com", "", "width=500, height=426");
				break;
		}
	}

	$scope.setNavSelection = function(selection){
		if ($scope.navSelection == selection ) return;
		$scope.navSelection = selection;
		$scope.rootScope.$broadcast('navigateAway');
		if ( $scope.location.hash() != 'content' )
			navigate(selection);
		else
			setTimeout( function(){
				navigate(selection);
				$scope.$apply();
			}, 500);
	}

	console.log("indexCtrl loaded");
});
