(function(){
	'use strict';
	angular.module('mod1App',[])
	.controller('mod1Controller', controllerFunction);

	controllerFunction.$inject = ['$scope'];
	function controllerFunction($scope){
		$scope.check = function(){
			var items = $scope.items;
			if (items !== undefined) {
			var itemsArray = $scope.items.split(/[ ,]+/);
			console.log(itemsArray);
			var length = itemsArray.length;
			$scope.result = length <= 3 ? 'Enjoy' : 'Too much!';
				
			} else {
				$scope.result = 'Please enter data first';
			}
		}
	}

})();