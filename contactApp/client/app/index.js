import angular from 'angular';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import * as angularMeteor from 'angular-meteor';

angular.module('contactApp', ['ngMaterial', 'angular-meteor', 'angular-meteor.auth', 'ngMessages'])
    .config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('deep-orange');

        $mdIconProvider.fontSet('fa', 'fontawesome');
    }]);