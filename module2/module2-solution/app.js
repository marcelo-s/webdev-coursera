(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService) {
		var buyController = this;
		buyController.message = 'Everything is bought!';
		buyController.items = ShoppingListCheckOffService.getToBuyItems();

		buyController.buy = function(index) {
			ShoppingListCheckOffService.buy(index);
		};

		buyController.isEmpty = function(){
			return  buyController.items.length === 0;
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtController = this;
		boughtController.message = 'Nothing bought yet';
		
		boughtController.items = ShoppingListCheckOffService.getBoughtItems();
        
		boughtController.isEmpty = function(){
			return boughtController.items.length === 0;
		};
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuy = [{
			name: "cookies",
			quantity: 10
		}, {
			name: "water",
			quantity: 1
		}, {
			name: "chips",
			quantity: 10
		}, {
			name: "popcorn",
			quantity: 1
		}, {
			name: "chocolate",
			quantity: 50
		}];

		var alreadyBought = [];

		service.buy = function(index) {
			var item = toBuy.splice(index, 1);
			var newItem = {
				name: item[0].name,
				quantity: item[0].quantity
			}
			console.log(newItem);
			alreadyBought.push(newItem);
		};

		service.getToBuyItems = function() {
			return toBuy;
		};

		service.getBoughtItems = function() {
			return alreadyBought;
		};
	}

})();