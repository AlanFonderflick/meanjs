'use strict';

// Games controller
angular.module('games').controller('GamesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Games',
	function($scope, $stateParams, $location, Authentication, Games) {
		$scope.authentication = Authentication;

		// Create new Game
		$scope.create = function() {
			// Create new Game object
			var game = new Games ({
				post : []
			});
			game.post.push({
				content: this.content,
				isPic: this.isPic
			});

			// Redirect after save
			game.$save(function(response) {
				$location.path('games/' + response._id);

				// Clear form fields
				$scope.isPic = false;
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Games
		$scope.find = function() {
			$scope.games = Games.query();
		};

		// Find existing Game
		$scope.findOne = function() {
			$scope.game = Games.get({ 
				gameId: $stateParams.gameId
			});
		};

	}
]);