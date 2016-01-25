'use strict';

let app = angular.module('contactApp');

app.controller('mainController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.openDialog = function() {
        $mdDialog.show({
            templateUrl: 'client/views/login.html',
            controller: 'loginController'
        });
    }

    $scope.logout = function() {
        Meteor.logout();
    }

}]);

app.controller('loginController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.login = function(e, user) {
        e.preventDefault();
        Meteor.loginWithPassword(user.username, user.password, () => $mdDialog.hide());
    };

    $scope.closeDialog = function() {
        $mdDialog.hide();
    };
}]);