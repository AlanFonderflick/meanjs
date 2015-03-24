'use strict';

// VERSION ALTERNATIVE NON UTILISEE / ! \

angular.module('games').directive('drawingCanvas', ['common.fabric',
	function() {
		return {
				restrict: 'E',
		       	controller: function($scope, fabric){
console.log('COUCOU');
var canvas = new fabric.Canvas('canvas');
console.log(canvas);
canvas.background='#000000';
		       	},
		       	templateUrl: 'modules/games/views/drawing-canvas.client.view.html'
		};
	}
]);