var contactApp = angular.module('contactApp');

contactApp.controller('contactController', ['$scope', '$meteor', function($scope, $meteor) {

    $scope.contacts = $meteor.collection(Contacts).subscribe('contact');
    $scope.editZone = false;

    $scope.add = function(e, contact) {
        e.preventDefault();
        $meteor.call('insertContact', contact);
        //$scope.contacts.save(contact);
    };

    $scope.update = function(e, contact) {
        e.preventDefault();
        $meteor.call('updateContact', contact);
    };

    $scope.edit = function() {
        this.editZone = true;
    };

}]);