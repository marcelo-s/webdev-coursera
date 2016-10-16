(function() {
	'use strict';
	angular.module('NarrowItDownApp', [])
		.directive('foundItems', FoundItemsDirective)
		.service('MenuSearchService', MenuSearchService)
		.controller('NarrowItDownController', NarrowItDownController);

	function FoundItemsDirective() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				onRemove: '&',
				found: '<'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'foundItemsCtrl',
			bindToController: true
		};
		return ddo;
	}

	function FoundItemsDirectiveController() {
		var controller = this;
	}

	MenuSearchService.$inject = ['$http'];

	function MenuSearchService($http) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			return $http({
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				method: 'GET'
			}).then(function(response) {
				var foundItems = [];
				if (searchTerm !== undefined && searchTerm) {
					var menu_items = response.data.menu_items;
					for (var i = 0; i < menu_items.length; i++) {
						if (menu_items[i].description.indexOf(searchTerm) >= 0) {
							foundItems.push(menu_items[i]);
						}
					}
				}
				return foundItems;
			}, function(error) {
				throw new Error('Something went wrong : ' + error);
			});
		};
	}


	function NarrowItDownController(MenuSearchService) {
		var controller = this;
		controller.nothingFoundMessage = '';
		controller.found = [];
		controller.getMatchedMenuItems = function(searchTerm) {
			controller.nothingFoundMessage = '';
			controller.found = [];
			MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
				controller.found = result;
				if (controller.found.length === 0) {
					controller.nothingFoundMessage = 'Nothing found';
				}
			});
		};
		controller.remove = function(index) {
			controller.found.splice(index, 1);
		};
	}
})();