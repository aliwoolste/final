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
        $scope.days.$save({
          Friday: {
            name: 'Monday',
            slots: {
              900: {
                time: '9:00pm',
                booked: false
              },
              0110: {
                time: '11:00pm',
                booked: false
              },
              100: {
                time: '1:00pm',
                booked: false
              },
              300: {
                time: '3:00pm',
                booked: false
              },
              500: {
                time: '5:00pm',
                booked: false
              },
              700: {
                time: '7:00pm',
                booked: false
              }
        	  }
          },
          Saturday: {
            name: 'Tuesday',
            slots: {
              900: {
                time: '9:00pm',
                booked: false
              },
              0110: {
                time: '11:00pm',
                booked: false
              },
              100: {
                time: '1:00pm',
                booked: false
              },
              300: {
                time: '3:00pm',
                booked: false
              },
              500: {
                time: '5:00pm',
                booked: false
              },
              700: {
                time: '7:00pm',
                booked: false
              }
        	  }
          },
          Sunday: {
            name: 'Wednesday',
            slots: {
              900: {
                time: '9:00pm',
                booked: false
              },
              0110: {
                time: '11:00pm',
                booked: false
              },
              100: {
                time: '1:00pm',
                booked: false
              },
              300: {
                time: '3:00pm',
                booked: false
              },
              500: {
                time: '5:00pm',
                booked: false
              },
              700: {
                time: '7:00pm',
                booked: false
              }
        	  }
          }
        });
    }
    $scope.book = function(day, slot){
      //console.log($scope.days);
      console.log("day: "+day);
      console.log("slot: " + slot);
      //console.log("email: " + $scope.email);
      //console.log("email from database: "+ )
      //$scope.days[day.name].slot.booked = true;
      //$scope.days[day.name] = day;
      //console.log("day.slots[slot]: "+day.slots[slot]);
      //day.slots[slot].email = $scope.email;
      $scope.days.$save(day);
      console.log($scope.days[day.name]);
    }

    // $scope.saveEmail = function(email) {
    //     console.log("Email from save email f(x)" +email);
    //     $scope.emails.$add(email);
    // }


}]);
