/**
 * Routes.
 *
 * @author     Delong Huang <delong.huang.mit@gmail.com>
 * @copyright
 * @license    Proprietary
 * @category   AngularJS
 * @link
 */
(function () {
  'use strict';

  angular.module('myApp').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
      $uiViewScrollProvider.useAnchorScroll();
      $urlRouterProvider
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id');

      $stateProvider
        .state('contacts', {
          url: '/',
          controller: 'IndexController',
          templateUrl: 'views/pages/index.html'
        })
        .state('contacts.detail', {
          url: 'list/{contactId:[0-9]{1,4}}',
            views : {
             '@' : {
                controller: 'editContactFormController',
                templateUrl: 'views/forms/edit-user.html'
              }
        }});

    }]);
}());
