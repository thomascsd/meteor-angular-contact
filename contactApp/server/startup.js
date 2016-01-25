'use strict';

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