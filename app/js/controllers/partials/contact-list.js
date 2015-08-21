/**
 * User list Controller.
 *
 * @author     Delong Huang <delong.huang.mit@gmail.com>
 * @copyright
 * @license    Proprietary
 * @category   AngularJS
 * @link
 */
(function () {
    'use strict';
    angular.module('myApp').controller('contactListController', ['$scope', 'userService', function ($scope, userService) {

        userService.getAllContacts().then(function (res) {
            $scope.contacts = res;
        });
    }]);
}());

