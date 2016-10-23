(function() {
	'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'home.html'
		});

		$stateProvider.state('categories', {
			url: '/categories',
			templateUrl: 'categories.html',
			controller: 'CategoriesController as catctrl',
			resolve: {
				categories: ['MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		});

		$stateProvider.state('item', {
			parent: 'categories',
			url: '/item/:categoryShortName',
			templateUrl: 'items.html',
			controller: 'ItemsController as itemsctrl',
			resolve: {
				itemData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
				}]
			}
		});
	}
})();