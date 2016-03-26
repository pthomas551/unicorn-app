angular.module('unicorn.services', [])

.factory('UnicornService', function($http) {
  var UNICORN_URL = 'http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC&rating=pg';
  var items = [];
  var offset = 25;
  return {
    GetFeed: function() {
      return $http.get(UNICORN_URL).then(function(response) {
        items = response.data.data;
        return items;
      });
    },
    GetNewImages: function() {
      return $http.get(UNICORN_URL+'&offset='+offset).then(function(response) {
        items = response.data.data;
        offset += 25;
        return items;
      });
    }
  };
})
.factory('TrendingService', function($http) {
  var TRENDING_URL = 'http://api.giphy.com/v1/gifs/trending?&api_key=dc6zaTOxFJmzC&rating=pg';
  var items = [];
  var offset = 25;
  return {
    GetFeed: function() {
      return $http.get(TRENDING_URL).then(function(response) {
        items = response.data.data;
        return items;
      });
    },
    GetNewImages: function() {
      return $http.get(TRENDING_URL+'&offset='+offset).then(function(response) {
        items = response.data.data;
        offset += 25;
        return items;
      });
    }
  };
})
;
