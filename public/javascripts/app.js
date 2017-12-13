// create our angular module and inject firebase
//angular.module('scheduleApp', ['firebase'])
var myApp = angular.module("scheduleApp",[]);
// create our main controller and get access to firebase
myApp.controller("mainController", ["$scope",
function($scope) {
$scope.days= [];
$scope.reset = function() {

} 
}]);
