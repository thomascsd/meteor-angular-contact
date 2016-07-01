import angular from 'angular';
import { Contacts } from '../../imports/models/contacts';

'use strict';


angular
    .module('contactApp')
    .controller('contactController', contactController);

contactController.$inject = ['$scope', '$auth', '$reactive'];

function contactController($scope, $auth, $reactive) {
    $reactive(this).attach($scope);
    let vm = this;

    vm.contact = {};
    vm.subscribe('contact');
    vm.helpers({
        contacts: () => Contacts.find({})
    });

    vm.add = add;
    vm.update = update;
    vm.edit = edit;
    vm.canEdit = canEdit;

    function add(e, contact) {
        e.preventDefault();
        Meteor.call('insertContact', contact, (error) => {
            vm.contact = null;
        });
    }

    function update(e, contact) {
        e.preventDefault();
        Meteor.call('updateContact', {
            id: contact._id,
            name: contact.name,
            email: contact.email,
            age: contact.age
        }, (error) => {
            contact.editZone = false;
        });

    }

    function edit(contact) {
        vm.editContact = contact;

        //contact.editZone = true;
        angular.forEach(vm.contacts, function(item) {
            if (contact._id === item._id) {
                item.editZone = true;
            }
            else {
                item.editZone = false;
            }
        });
    }

    function canEdit(contact) {
        const user = Meteor.user();
        let sameUser = false;

        if (user) {
            sameUser = contact.name === user.username || user.username === 'admin';
        }

        return sameUser;
    }

}
