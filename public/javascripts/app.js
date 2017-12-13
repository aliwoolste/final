// create our angular module and inject firebase
//angular.module('scheduleApp', ['firebase'])
var myApp = angular.module("scheduleApp",[]);
// create our main controller and get access to firebase
myApp.controller("mainController", ["$scope",
function($scope) {
$scope.days= {
  friday: {
    name: 'Friday',
    slots: {
      900: {
        time: '9:00am',
        booked: false
      },
      0110: {
        time: '11:00am',
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
  saturday: {
    name: 'Saturday',
    slots: {
      900: {
        time: '9:00am',
        booked: false
      },
      0110: {
        time: '11:00am',
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
  sunday: {
    name: 'Sunday',
    slots: {
      900: {
        time: '9:00am',
        booked: false
      },
      0110: {
        time: '11:00am',
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
};

$scope.reset = function() {

}
}]);
