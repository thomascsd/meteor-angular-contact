'use strict';
import angular from 'angular';
import { Contacts } from '../../imports/models/contacts';

let contactApp = angular.module('contactApp');

contactApp.directive('onlyusername', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        controller: function($element) {
            var ctrl = $element.controller('ngModel');
            
            ctrl.$validators.onlyUsername = function(modeValue, viewValue) {
                if (viewValue) {
                    var user = Contacts.find({
                        'name': viewValue
                    }).fetch();

                    if (user.length > 0) {
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
