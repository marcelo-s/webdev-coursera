(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['itemData'];
	function ItemsController(itemData){
		var controller = this;
		controller.category = itemData.category;
		controller.menu_items = itemData.menu_items;
		
	}
})();