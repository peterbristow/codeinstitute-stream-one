(function () {
    'use strict';
    angular.module('theMonkeesApp.controllers')
        .controller('GigsController', ['$scope', 'GigsService', function ($scope, GigsService) {

            /*
             * load gigs from the json file
             */
            function loadGigs() {
                GigsService.getData().then(function (data) {
                    $scope.gigs = data.gigs;
                });
            }
        
            function initialize() {
                $scope.pageTitle1 = "Gigs";
                $scope.pageTitle2 = "Booking";

                loadGigs();
            }

            initialize();

        }]);

}());