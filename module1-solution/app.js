(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.check = function(){
			var items = $scope.items;
			if (items !== undefined && items) {
			var itemsArray = items.split(/[,\s]+/);
			console.log(itemsArray);
			var length = itemsArray.length;
			$scope.result = length <= 3 ? 'Enjoy' : 'Too much!';
				
			} else {
				$scope.result = 'Please enter data first';
			}
		};
	}

})();