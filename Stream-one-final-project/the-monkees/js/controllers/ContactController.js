(function () {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('ContactController', ['$scope', function ($scope) {
            function initialize() {
                $scope.pageTitle = "Contact Us";
            }

            initialize();
        }]);

}());