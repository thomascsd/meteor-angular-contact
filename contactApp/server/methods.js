'use strict';

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