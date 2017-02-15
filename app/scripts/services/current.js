'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.current
 * @description
 * # current
 * Factory in the weatherAppApp.
 */
angular.module('weatherApp')
.factory('current', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=747250622117aad93959aeee670f86bf', {}, {
    query: {
      method:'GET',
      params:{
        location: 'Seattle,us'
      },
      isArray:false
    }
  });
});
