'use strict';

let contactApp = angular.module('contactApp');

contactApp.directive('onlyUsername', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        controller: function($element) {
            var ctrl = $element.controller('ngModel');
            
            ctrl.$validators.onlyUsername = function(modeValue, viewValue) {
                if (viewValue) {
                    var user = Contacts.findOne({
                        'name': viewValue
                    }).fetch();

                    if (user) {
                        //Has same user
                        return false;
                    }
                    return true;
                } else {
                    return true;
                }

            }
        }
    };
})
