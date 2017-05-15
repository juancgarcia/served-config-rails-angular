/* global angular */

angular.module('ex-app', [])
  .run(['$http', 'configFactory', runBlock])

function runBlock ($http, configFactory) {
  console.log('I run at startup!')
  console.log('the default secret is: ', configFactory.secret)
  const url = 'http://localhost:3000/configs'
  $http({
    method: 'GET',
    url: url
  }).then(function (response) {
    console.log('did it')
    console.log("The server secret is", response.data)
  }, function (response) {
    console.log('didnt do it')
  })
}
