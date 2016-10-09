(function() {
	'use strict';

	angular.module('newApp', [])
		.controller('cont1', ControllerFunction1);

    ControllerFunction1.$inject = ['$scope'];
	function ControllerFunction1($scope) {
		$scope.test = 'hola';
	}


})();