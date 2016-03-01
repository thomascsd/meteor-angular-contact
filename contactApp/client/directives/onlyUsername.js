'use strict';

let contactApp = angular.module('contactApp');

contactApp.directive('onlyUsername', function() {
    return {
        restrict: 'A',
        controller: function(scope, element, attrs, ctrl) {
            ctrl.$validators.onlyUsername = function(modeValue, viewValue) {

            }
        }
    };
})
