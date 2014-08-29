google.load('visualization', '1', {packages:['corechart']});
google.setOnLoadCallback(function() {
  console.log("Finished loading google visualization.");
});

var repertoireCtrl = angular.module('repertoireCtrl', []);

repertoireCtrl.controller('repertoireCtrl', function($scope) {

	$scope.requestInView = false;
	$scope.repBlurbInView = false;
	$scope.repTableInView = false;
	$scope.repTableLoaded = false;

	var query = new google.visualization.Query("https://docs.google.com/spreadsheets/d/1_pV6hj090t0agtIv0wfCe_Kc5yJxo9eKkPWr_aODmKA/edit#gid=0");
	query.setQuery('select A,B,C');
	query.send(handleQueryResponse);

	function handleQueryResponse(data) {
		$scope.data = data.getDataTable();
		$scope.dataView = new google.visualization.DataView($scope.data);
		$scope.sortBy(1);
		$scope.repTableLoaded = true;
		$scope.$apply();
	}

	$scope.sortBy = function(sort){
		$scope.sortedData = $scope.dataView.getSortedRows(sort);
	}

	$scope.$on('navigateAway', function(){
		$scope.requestInView = false;
		$scope.repBlurbInView = false;
		$scope.repTableInView = false;
		$scope.repTableLoaded = false;
	});

	console.log("repertoireCtrl loaded");
});
