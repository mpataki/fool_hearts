google.load('visualization', '1', { packages: ['corechart'] });
google.setOnLoadCallback(function() {
  console.log("Finished loading google visualization.");
});

var repertoireCtrl = angular.module('repertoireCtrl', []);

repertoireCtrl.controller('repertoireCtrl', function($scope) {

	SONG_TITLE = 0
	ARTIST = 1
	RELEASED = 2

	$scope.requestInView = false;
	$scope.repBlurbInView = false;
	$scope.repTableInView = false;
	$scope.repTableLoaded = false;
	$scope.showRequestResponse = false;
	$scope.sortCol = 1;

	var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1_pV6hj090t0agtIv0wfCe_Kc5yJxo9eKkPWr_aODmKA/edit?usp=sharing");
	query.setQuery('select A,B,C');
	query.send(handleQueryResponse);

	function handleQueryResponse(data) {
		$scope.rep = data.C.Gf.map(function(e){
			return { title: e.c[0].v, artist: e.c[1].v, released: e.c[2].v };
		})
		$scope.sortBy(ARTIST);
		$scope.repTableLoaded = true;
		$scope.$apply();
	}

	removeThe = function(str){
		return str.replace(/^(The |the )/, "")
	}

	$scope.sortBy = function(sort){
		sortFunction = null;
		$scope.rep.forEach(function(e, i) { e.i = i; })

		switch(sort) {
			case SONG_TITLE:
				sortFunction = function(a, b) {
					aWithoutThe = removeThe(a.title);
					bWithoutThe = removeThe(b.title);

					if (aWithoutThe == bWithoutThe)
						return (a.i < b.i) ? -1 : 1; // stage sort

					return aWithoutThe < bWithoutThe ? -1 : 1;
				}
				break;
			case ARTIST:
				sortFunction = function(a, b) {
					aWithoutThe = removeThe(a.artist);
					bWithoutThe = removeThe(b.artist);

					if (aWithoutThe == bWithoutThe)
						return (a.i < b.i) ? -1 : 1; // stage sort

					return aWithoutThe < bWithoutThe ? -1 : 1;
				}
				break;
			case RELEASED:
				sortFunction = function(a, b) {
					return a.released - b.released;
				}
				break;
		}

		$scope.rep = $scope.rep.sort(sortFunction)
		$scope.sortCol = sort;
	}

	$scope.request = { title: '', name: '' };
	$scope.response = '';
	$scope.requestResponse = function(){
		if ( $scope.request.title || $scope.request.artist )
			$scope.response = 'Your request has been received. Thanks!';
		else
			$scope.response = 'Oops, enter a song above and try again.';
	}

	$scope.$on('navigateAway', function(){
		$scope.requestInView = false;
		$scope.repBlurbInView = false;
		$scope.repTableInView = false;
		$scope.repTableLoaded = false;
	});

	console.log("repertoireCtrl loaded");
});
