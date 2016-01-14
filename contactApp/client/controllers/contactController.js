var contactApp = angular.module('contactApp');

contactApp.controller('contactController', ['$scope', function($scope) {
    $scope.contact = {};
    $scope.subscribe('contact');
    $scope.helpers({
        contacts: () => Contacts.find({})
    });

    $scope.add = function(e, contact) {
        e.preventDefault();
        Meteor.call('insertContact', contact, (error) => {
            $scope.contact = null;
        });
    };

    $scope.update = function(e, contact) {
        e.preventDefault();
        Meteor.call('updateContact', {
            id: contact._id,
            name: contact.name,
            email: contact.email,
            age: contact.age
        }, (error) => {
            contact.editZone = false
        });

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