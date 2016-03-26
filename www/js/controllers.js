angular.module('unicorn.controllers', [])

.controller('UnicornsCtrl', function($scope, $timeout, UnicornService) {
	$scope.items = [];
	UnicornService.GetFeed().then(function(items){
		$scope.items = items;
	});
	$scope.loadMore = function() {
		UnicornService.GetNewImages().then(function(items){
			$scope.items = $scope.items.concat(items);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};
})
.controller('TrendingCtrl', function($scope, $timeout, TrendingService) {
	$scope.items = [];
	TrendingService.GetFeed().then(function(items){
		$scope.items = items;
	});
	$scope.loadMore = function() {
		TrendingService.GetNewImages().then(function(items){
			$scope.items = $scope.items.concat(items);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};
})
.controller('UnicornDetailCtrl', function() {})
.controller('SearchCtrl', function() {})
;
