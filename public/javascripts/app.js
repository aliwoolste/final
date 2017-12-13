// create our angular module and inject firebase
//angular.module('scheduleApp', ['firebase'])
var myApp = angular.module("scheduleApp",["firebase"]);
// create our main controller and get access to firebase
myApp.controller("mainController", ["$scope","$firebaseArray",
function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("days");
    // var refEmail = firebase.database().ref().child("email");
    // $scope.emails = $firebaseArray(refEmail);
    $scope.days = $firebaseArray(ref);
    console.log($scope.days);
	$scope.email = localStorage.email;
	console.log($scope.email);
    $scope.reset = function() {

    }
    $scope.book = function(day, slot){
      //console.log($scope.days);
      console.log("day: "+day);
      console.log("slot: " + slot);
      console.log("email: " + $scope.email);
      //$scope.days[day.name].slot.booked = true;
      //$scope.days[day.name] = day;
      console.log("day.slots[slot]: "+day.slots[slot]);
      day.slots[slot].email = $scope.email;
      $scope.days.$save(day);
      console.log($scope.days[day.name]);
    }

    // $scope.saveEmail = function(email) {
    //     console.log("Email from save email f(x)" +email);
    //     $scope.emails.$add(email);
    // }


}]);
