var contactApp = angular.module('contactApp');

contactApp.controller('contactController', ['$scope', '$meteor', function($scope, $meteor) {
    $scope.editContact = null;

    $scope.subscribe('contact');
    $scope.helpers({
        contacts: () => Contacts.find({})
    });

    $scope.add = function(e, contact) {
        e.preventDefault();
        $meteor.call('insertContact', contact);
    };

    $scope.update = function(e, contact) {
        e.preventDefault();
        $meteor.call('updateContact', {
                id: contact._id,
                name: contact.name,
                email: contact.email,
                age: contact.age
            })
            .then(() => contact.editZone = false);
    };

    $scope.edit = function(contact) {
        $scope.editContact = contact;

        //contact.editZone = true;
        angular.forEach($scope.contacts, function(item) {
            if (contact._id === item._id) {
                item.editZone = true;
            }
            else {
                item.editZone = false;
            }
        });
    };

}]);