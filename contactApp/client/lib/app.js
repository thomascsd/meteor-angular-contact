'use strict';
angular.module('contactApp', ['angular-meteor', 'angular-meteor.auth', 'ngMessages', 'ngMaterial'])
    .config(['$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('deep-orange');

        $mdIconProvider.fontSet('fa', 'fontawesome');
    }]);