angular.module('unicorn.controllers', [])

.controller('UnicornsCtrl', function($scope, $timeout, PictureService) {
	$scope.items = [];
	PictureService.GetFeed().then(function(items){
		$scope.items = items;
	});
	$scope.loadMore = function() {
		PictureService.GetNewImages().then(function(items){
			$scope.items = $scope.items.concat(items);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};
})
.controller('TrendingCtrl', function() {})
.controller('UnicornDetailCtrl', function() {})
.controller('SearchCtrl', function() {});
