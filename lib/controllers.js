var minaControllers  = angular.module('minaControllers', []);

minaControllers.controller('AppController', function AppController($scope, $http, $log, $q){

    var retur_data_2016 = $http.get('data_2016.json'),
    	retur_data_2017 = $http.get('data_2017.json');
    $q.all([retur_data_2016, retur_data_2017]).then(function(arrayOfResults) {
    	$log.debug(arrayOfResults);
    	var mergedObject = arrayOfResults[0].data.dagar.concat(arrayOfResults[1].data.dagar);
    	$log.debug(mergedObject);
    	$scope.retur_data = mergedObject;
    });

});