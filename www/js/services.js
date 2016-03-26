angular.module('starter.services', [])

.factory('Chats', function() {

  var items = [];
  return {
    GetFeed: function() {
      return $http.get(BASE_URL).then(function(response) {
        items = response.data.results;
        return items;
      });
    },
    GetNewImages: function() {
      return $http.get(BASE_URL).then(function(response) {
        items = response.data.results;
        return items;
      });
    }
  };
});
