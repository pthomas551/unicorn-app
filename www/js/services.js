angular.module('unicorn.services', [])

.factory('PictureService', function($http) {
  var GIPHY_URL = 'http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC   ';
  var items = [];
  return {
    GetFeed: function() {
      return $http.get(GIPHY_URL).then(function(response) {
        items = response.data.data;
        return items;
      });
    },
    GetNewImages: function() {
      return $http.get(GIPHY_URL).then(function(response) {
        items = response.data.data;
        return items;
      });
    }
  };
});
