(function(){
	'use strict'

	angular.module('mod3App', [])
	.controller('mod3Controller', ControllerFunction1)
	;

	function ControllerFunction1(){
		var ctrl1 = this;
		ctrl1.name = "Marcelos";
	}
})();