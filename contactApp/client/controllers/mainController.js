'use strict';

let app = angular.module('contactApp');

app.controller('mainController', ['$scope', '$mdDialog', function($scope, $mdDialog) {

    $scope.openDialog = function() {
        $mdDialog.show({
            templateUrl: 'client/views/login.html',
            controller: 'loginController'
        });
    }

}]);

app.controller('loginController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.login = function(e) {

    };

    $scope.openDialog = function(e) {
        $mdDialog.hide();
    };
}]);