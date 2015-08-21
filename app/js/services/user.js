/**
 * User Service.
 *
 * @author     Delong Huang <delong.huang.mit@gmail.com>
 * @copyright
 * @license    Proprietary
 * @category   AngularJS
 * @link
    */
(function () {
    'use strict';
    angular.module('myApp').factory('userService', ['$rootScope', '$http', '$q', '$state', function ($rootScope, $http, $q, $state) {
        /* jshint unused:false */

        var userService = {

            /**
             * Get All Contacts.
             *
             * @return promise
             */
            getAllContacts: function () {
                var assets = 'assets/contacts.json';
                var deferred = $q.defer();
                $http.get(assets).then(function (resp) {
                    deferred.resolve(resp.data.contacts);
                });
                return deferred.promise;
            },

            /**
             * Get Contact by Job ID.
             * @param  {string}  id -  contact Job id
             * @return null or {object} - contact
             */
            getContactByJobId: function (id) {
                var self = this;
                var deferred = $q.defer();

                self.getAllContacts().then(
                    function (response) {
                        $.each(response, function (i, item) {
                            if (item.jobId === id) {
                                deferred.resolve(item)
                            }

                        })
                    },
                    function (respone) {
                        deferred.reject(null);
                    });

                return deferred.promise;
            },
        };


        return userService;
    }]);
}());
