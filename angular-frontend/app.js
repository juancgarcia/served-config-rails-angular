/* global angular */

angular.module('ex-app', [])
  .factory('configFactory', configFactory)
  .run(['$http', 'configFactory', runBlock])

function runBlock ($http, configFactory) {
  console.log('I run at startup!')
  const url = 'http://localhost:3000/config'
  $http({
    method: 'GET',
    url: url
  }).then(function (response) {
    console.log('did it')
  }, function (response) {
    console.log('didnt do it')
  })
}

function configFactory () {
  return {
    config: {}
  }
}
