(function() {
	'use strict';

	angular.module('MenuApp')
		.component('itemsList', {
			templateUrl: 'itemscomponent.html',
			bindings: {
				category: '<',
				menuItems: '<'
			}
		});

})();