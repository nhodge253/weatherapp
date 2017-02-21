'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherAppApp.
 */
 angular.module('weatherAppApp')
   .factory('citysearch', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=747250622117aad93959aeee670f86bf', {}, {
       find: {
         method: 'GET',
         params: {
           query: 'seattle'
         },
         isArray: false
       }
     });
   });
