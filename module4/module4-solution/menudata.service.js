(function() {
	'use strict';

	angular.module('Data')
		.factory('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$q', '$http'];

	function MenuDataService($q, $http) {

		function getAllCategories() {
			var url = 'https://davids-restaurant.herokuapp.com/categories.json';
			return $http.get(url).then(function(response) {
				return response.data;
			});
		}

		function getItemsForCategory(categoryShortName) {
			var url = 'https://davids-restaurant.herokuapp.com/menu_items.json';
			return $http.get(url, {
					params: {
						category: categoryShortName
					}
				})
				.then(function(response) {
					return response.data;
				});
		}

		return {
			getAllCategories: getAllCategories,
			getItemsForCategory: getItemsForCategory
		};
	}
})();