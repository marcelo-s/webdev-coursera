(function() {

	'use strict';
	angular.module('MenuApp')
		.controller('CategoriesController', CategoriesController);

	function CategoriesController() {}
	CategoriesController.$inject = ['categories'];

	function CategoriesController(categories) {
		var controller = this;
		controller.categories = categories;
	}
})();