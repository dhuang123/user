/**
 * About Us Page Controller.
 *
 * @author     Delong Huang <delong.huang.mit@gmail.com>
 * @copyright
 * @license    Proprietary
 * @category   AngularJS
 * @link
 */
(function () {'use strict';}());

angular.module('myApp').controller('contactDetailController', ['$scope','$stateParams', 'userService', function($scope, $stateParams, userService) {
    console.log($stateParams);
    userService.getContactByJobId($stateParams.contactId).then(function(res){
        $scope.contact = res;
    });

}]);
