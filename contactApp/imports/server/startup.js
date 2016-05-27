'use strict';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(function() {
    const admin = Accounts.findUserByUsername('admin');

    console.log('admin' + JSON.stringify(admin));

    if (!admin) {
        Accounts.createUser({
            username: 'admin',
            password: 'admin'
        });
    }
});