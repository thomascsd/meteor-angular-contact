'use strict';

Meteor.startup(function() {
    const admin = Accounts.findUserByUsername('admin');

    if (!admin) {
        Accounts.createUser({
            username: 'admin',
            password: 'admin'
        });
    }
});