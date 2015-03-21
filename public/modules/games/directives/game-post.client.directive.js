'use strict';

angular.module('games').directive('gamePost', [
	function() {
		return {

			   restrict: 'E',
		       link: function(scope, element, attrs) {

		       		//Get the correct path for image or text gamePost template
		           scope.getContentUrl = function() {
		           		var templateType = '';
						if(attrs.picture === 'false'){
							templateType = 'text';
						}
						else {
							templateType = 'picture';
						}

		                return '/modules/games/views/templates/game-post-' + templateType + '.client.view.html';
		           };

		       },
		       template: '<div ng-include="getContentUrl()"></div>'
			};
	}
]);