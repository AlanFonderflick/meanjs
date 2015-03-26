'use strict';

angular.module('games').controller('CanvasDrawingController', ['$scope',
	function($scope) {
		$scope.canvas = {
			height: 500,
			width: 500,
			setHeight : function(_height) {
				$scope.canvas.height = _height ;
			},
			setWidth : function(_width) {
				$scope.canvas.width = _width ;
			}			
		};

	}
]);