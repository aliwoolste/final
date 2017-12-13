// create our angular module and inject firebase
//angular.module('scheduleApp', ['firebase'])
var myApp = angular.module("scheduleApp",["firebase"]);
// create our main controller and get access to firebase
myApp.controller("mainController", ["$scope","$firebaseArray",
function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("days");
    $scope.days = $firebaseArray(ref);
    

    $scope.reset = function() {

    }
}]);
