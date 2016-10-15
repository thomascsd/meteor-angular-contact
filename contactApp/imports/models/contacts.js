import {
    Mongo
}
from 'meteor/mongo';
import {
    Class
}
from 'meteor/jagi:astronomy';

export const Contacts = new Mongo.Collection('contact');

export const Contact = Class.create({
    name: 'Contact',
    collection: Contacts,
    fields: {
        name: String,
        email: String,
        age: Number,
        contactId: Mongo.ObjectID
    }
});