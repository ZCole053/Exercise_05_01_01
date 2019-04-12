

//can be named whateever best practice is name it the same as the variable
var myApp = angular.module('myApp', []);

//nameing and giving dependencies for the controller
//template for a submit
myApp.controller('RegistrationController', ['$scope', function($scope) {
    //putting a function into the name value pair of register
    $scope.register = function(){
        $scope.message = 'Thank you for your submission ' + 
        $scope.user.firstname;//scope has a user name value pair also
    }
}]);