(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.provider('ShoppingProvider', ShoppingProvider);

	ToBuyController.$inject = ['ShoppingFactory'];

    function ShoppingProvider(){

    }

	function ToBuyController(ShoppingFactory) {
		var buyController = this;
		var service = ShoppingFactory();
		buyController.message = 'Everything is bought!';

		buyController.items = service.getToBuyItems();

		buyController.buy = function(index) {
			service.buy(index);
		};

		buyController.isEmpty = function(){
			return  buyController.items.length === 0;
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingFactory'];
	function AlreadyBoughtController(ShoppingFactory) {
		var boughtController = this;
		var service = ShoppingFactory();
		boughtController.message = 'Nothing bought yet';
		
		boughtController.items = service.getToBuyItems();
        
        boughtController.buy = function(index) {
			service.buy(index);
		};
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
			var removedItems = toBuy.splice(index, 1);
			var newItem = {
				name: removedItems[0].name,
				quantity: removedItems[0].quantity
			};
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

	function ShoppingProvider(){
		var provider = this;

		provider.config = {

		};
		provider.$get = function(){
			return new ShoppingListCheckOffService();
		};
	}


})();