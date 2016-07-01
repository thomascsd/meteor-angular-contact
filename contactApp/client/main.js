import angular from 'angular';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

angular.module('contactApp', ['angular-meteor', 'angular-meteor.auth', 'ngMessages', 'ngMaterial'])
    .config(['$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('deep-orange');

        $mdIconProvider.fontSet('fa', 'fontawesome');
    }]);