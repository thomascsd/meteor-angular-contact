'use strict';
import angular from 'angular';

angular
    .module('contactApp')
    .controller('mainController', mainController)
    .controller('loginController', loginController);

mainController.$inject = ['$scope', '$mdDialog'];
loginController.$inject = ['$scope', '$mdDialog'];

function mainController($scope, $mdDialog) {
    const vm = this;

    vm.openDialog = openDialog;
    vm.logout = logout;

    function openDialog() {
        $mdDialog.show({
            templateUrl: 'client/views/login.html',
            controller: 'loginController'
        });
    }

    function logout() {
        $scope.$apply(function() {
            Meteor.logout();
        });

    }

}

function loginController($scope, $mdDialog) {
    $scope.login = function(e, user) {
        e.preventDefault();
        Meteor.loginWithPassword(user.username, user.password, () => $mdDialog.hide());
    };

    $scope.closeDialog = function() {
        $mdDialog.hide();
    };
}
