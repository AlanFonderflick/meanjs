'use strict';

angular.module('articles').directive('sample', [
	function() {
		return {
			template: '<div>TEEEEEEEST</div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Sample directive logic
				// ...

				element.text('this is the sample directive');
			}
		};
	}
]);