'use strict';
import {
    Meteor
}
from 'meteor/meteor';
import {
    check
}
from 'meteor/check';
import {
    Contact
}
from '../imports/models/contacts';


Meteor.methods({
    'insertContact': function(data) {
        check(data, {
            contactName: String,
            email: String,
            age: Number
        });

        var contact = new Contact({
            name: data.contactName,
            email: data.email,
            age: data.age
        });

        contact.save()

        Accounts.createUser({
            username: data.contactName,
            email: data.email,
            password: 'b12345'
        });
    },
    'updateContact': function(data) {
        check(data, {
            contactId: String,
            name: String,
            email: String,
            age: Number
        });

        var contact = Contact.findOne(data.contactId);

        contact.name = data.name;
        contact.age = data.age;
        contact.email = data.email;

        contact.save();
    }
});