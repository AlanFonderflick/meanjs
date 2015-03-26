'use strict';

angular.module('games').directive('drawingCanvas', [
	function() {
		return {
				restrict: 'E',
				template:'<canvas id="canvas" style="border:2px solid black"></canvas>',
				replace: 'true',
				scope: {
					height:'=',
					width:'=',
					canvas:'='
				},
		       	link: function($scope, element, attrs){

		       		$scope.canvas = element[0];
		       		$scope.context = $scope.canvas.getContext('2d');
		       		$scope.mousePressed = false ;
		       		$scope.lastX = 0;
		       		$scope.lastY = 0;

		       		//TEST
					$scope.context.fillStyle = '#000000';
					$scope.context.fillRect(0,0,100,100);
					$scope.context.beginPath();
					$scope.context.moveTo(20 + 125/2, 20);        // Top Corner
					$scope.context.lineTo(20 + 125, 105 + 20); // Bottom Right
					$scope.context.lineTo(20, 105 + 20);         // Bottom Left
					$scope.context.closePath();
					$scope.context.fillStyle = 'blue';
					$scope.context.fill();

					element.bind('mousedown', function(e){
          				//console.log('MouseDown');
		       			$scope.mousePressed = true;
        				$scope.draw(e.pageX - $scope.canvas.offsetLeft-65, e.pageY - $scope.canvas.offsetTop-175 , false);
       				}).bind('mousemove', function(e){
          				//console.log('MouseMove');
		       			if ($scope.mousePressed) {
			            	$scope.draw(e.pageX - $scope.canvas.offsetLeft-65, e.pageY - $scope.canvas.offsetTop-175, true);
			        	}
       				}).bind('mouseup', function(e){
          				//console.log('MouseUp');
		       			$scope.mousePressed = false;
       				}).bind('mouseleave', function(e){
          				//console.log('MouseLeave');
		       			$scope.mousePressed = false;
       				});       				

					$scope.draw = function(x, y, isDown) {
				    	if (isDown) {
					    	//console.log('Draw'+x+'x '+y+'y');
					        $scope.context.beginPath();
					        $scope.context.strokeStyle = '#df4b26';
					        $scope.context.lineWidth = 5;
					        $scope.context.lineJoin = 'round';
					        $scope.context.moveTo($scope.lastX, $scope.lastY);
					        $scope.context.lineTo(x, y);
					        $scope.context.closePath();
					        $scope.context.stroke();
				    	}
				    	$scope.lastX = x; 
				    	$scope.lastY = y;
					};

					$scope.clearArea = function() {
					    // Use the identity matrix while clearing the canvas
					    $scope.context.setTransform(1, 0, 0, 1, 0, 0);
					    $scope.context.clearRect(0, 0, $scope.context.canvas.width, $scope.context.canvas.height);
					};
		       },
		       	//templateUrl: 'modules/games/views/drawing-canvas.client.view.html'
		       	//template:'<canvas id="canvas" height="{{height}}" width="{{width}}" data-ng-mouseleave="mouseLeave()" data-ng-mouseup="mouseUp()" data-ng-mousedown="mouseDown($event)" class="well"></canvas>'
		};
	}
]);