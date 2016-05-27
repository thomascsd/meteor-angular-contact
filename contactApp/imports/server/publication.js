'use strict';
import { Meteor } from 'meteor/meteor';
import { Contacts } from '../models/contacts';

Meteor.publish('contact', function(){
    return Contacts.find({});
});