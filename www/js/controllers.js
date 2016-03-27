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
.controller('FullscreenImageCtrl', ['$scope', '$ionicModal',
  function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
    // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
    // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.showImage = function(url) {
      $scope.imageSrc = url;
      console.log(url); 
      $scope.openModal();
    };
  }
])
.controller('SearchCtrl', function() {})
;
