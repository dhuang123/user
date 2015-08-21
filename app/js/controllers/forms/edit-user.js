/**
 * Edit Contact Form Controller.
 *
 * Delong Huang <delong.huang.mit@gmail.com>
 * @copyright
 * @license    Proprietary
 * @category   AngularJS
 * @link
 */
(function () {
    'use strict';
}());

angular.module('myApp').controller('editContactFormController', ['$http', '$filter', '$scope', '$state', '$stateParams', 'userService', function ($http, $filter, $scope, $state, $stateParams, userService) {
    /* jshint unused:false */

    userService.getContactByJobId($stateParams.contactId).then(function (response) {
        $scope.contact = response;
        $.each(response, function (i, item) {
            $scope.form.element[i].value = item;
            if (i === 'availableDate') {
                $scope.form.element[i].value = new Date(item);
            }
        });
    });

    /**
     * Create Account form.
     *
     * @return void
     */
    $scope.form = {
        element: {
            jobId: {
                value: null,
                placeholder: ''
            },
            employed: {
                value: null
            },
            currentSalary: {
                value: null,
                placeholder: 'eg. 5000'

            },
            desiredSalary: {
                value: null,
                placeholder: 'eg. 5000'

            },
            name: {
                value: null,
                placeholder: 'eg. Peter Parker'
            },
            address: {
                value: null,
                placeholder: 'address'
            },
            availableDate: {
                value: null
            },
            suburb: {
                value: null,
                placeholder: 'suburb'
            },
            state: {
                value: null,
                options: [
                    {code: 'ACT', name: 'Australian Capital Territory'},
                    {code: 'NSW', name: 'New South Wales'},
                    {code: 'NT', name: 'Northern Territory'},
                    {code: 'QLD', name: 'Queensland'},
                    {code: 'SA', name: 'South Australia'},
                    {code: 'TAS', name: 'Tasmania'},
                    {code: 'VIC', name: 'Victoria'},
                    {code: 'WA', name: 'Western Australia'}
                ],
                placeholder: 'state'
            },
            postcode: {
                value: null,
                placeholder: 'postcode'
            },
            phone: {
                value: null,
                placeholder: 'phone',
                regex: /(.*\d.*){6,}/
            },
            email: {
                value: null,
                placeholder: 'enter your email',
                regex: /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$/i
            }
        },

        state: {
            sending: false
        },


        /**
         * Handle form submission (only called when validation successful).
         *
         * @return void
         */
        submit: function () {

        }


    };


}]);