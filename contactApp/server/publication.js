'use strict';
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../imports/models/contacts';

Meteor.publish('contact', function(){
    return Contacts.find({});
});