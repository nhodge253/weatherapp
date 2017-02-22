'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.forecast
 * @description
 * # forecast
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
    .factory('forecast', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=747250622117aad93959aeee670f86bf', {}, {
        query: {
          method:'GET',
          params:{
            cityID: '4717560' // Paris, France ID
          },
          isArray:false
        }
      });
    });
