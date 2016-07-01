'use strict';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contacts } from '../imports/models/contacts';


Meteor.methods({
    'insertContact': function(contact) {
        check(contact, {
            contactName: String,
            email: String,
            age: Number
        });

        Contacts.insert({
            name: contact.contactName,
            email: contact.email,
            age: contact.age
        });

        Accounts.createUser({
            username: contact.contactName,
            email: contact.email,
            password: 'b12345'
        });
    },
    'updateContact': function(contact) {
        check(contact, {
            id: String,
            name: String,
            email: String,
            age: Number
        });

        Contacts.update(contact.id, {
            $set: {
                name: contact.name,
                email: contact.email,
                age: contact.age
            }
        });
    }
});