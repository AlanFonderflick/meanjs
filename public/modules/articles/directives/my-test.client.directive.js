'use strict';

angular.module('articles').directive('myTest', [
	function() {
		return {
			template: '<div>MYTEST</div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// My test directive logic
				// ...

				element.text('this is the myTest directive');
			}
		};
	}
]);