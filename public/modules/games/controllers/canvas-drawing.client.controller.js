'use strict';

angular.module('games').controller('CanvasDrawingController', ['$scope',
	function($scope) {
		// Canvas drawing controller logic
		// ...

		$scope.canvas = new fabric.Canvas('pictureContent', {
		  backgroundColor: 'black',
		  selection: false
		});
		canvas.renderAll();

	}
]);