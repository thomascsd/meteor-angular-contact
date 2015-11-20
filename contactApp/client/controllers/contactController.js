var contactApp = angular.module('contactApp');

contactApp.controller('contactController', ['$scope', '$meteor', function($scope, $meteor) {

    $scope.contacts = $meteor.conllection(Contacts).subscribe();


    $scope.addContact = function(e, contact) {
        $meteor.call('insertContact', contact);
    };


}]);