/* global angular */

angular.module('ex-app')
  .factory('configFactory', configFactory)

function configFactory () {
  return {
    secret: 'hello world'
  }
}
