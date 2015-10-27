'use strict';

Meteor.publish('contact', function(){
    return Contacts.find({});
});