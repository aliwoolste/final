// create our angular module and inject firebase
//angular.module('scheduleApp', ['firebase'])
var myApp = angular.module("scheduleApp",["firebase"]);
// create our main controller and get access to firebase
myApp.controller("mainController", ["$scope","$firebaseArray",
function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("days");
    $scope.days = $firebaseArray(ref);
    $scope.name = "";
    console.log($scope.days);


    $scope.reset = function() {

    }
    $scope.book = function(day){
      //console.log($scope.days);
      console.log(day);
      //$scope.days[day.name].slot.booked = true;
      //$scope.days[day.name] = day;
      $scope.days.$save(day);
      console.log($scope.days[day.name]);

    }
}]);
