'use strict';

var AppCtrl = angular.module('tabs', ['ngRoute'])


AppCtrl.controller('AppCtrl', function ($scope) {

    // using nesting variable scopes: self container elements
    $scope.stations = {
        "BIS": {
            "id": "BIS",
            "name": "Bishop Stortford",
            "city": "Essex",
            "to": [
                "Cambridge",
                "London"
            ]
        },
        "LTD": {
            "id": "LTD",
            "name": "Liverpool Street",
            "city": "London",
            "to": [
                "Cambridge",
                "Bishop Stortford"
            ]
        }
    };

    $scope.setActive = function (type) {

        // RESET class to ALL the active classes
        $scope.tab1Active = '';
        $scope.tab2Active = '';
        $scope.tab3Active = '';

        console.log($scope)

        // adding the active class
        $scope[type + 'Active'] = 'active';

    };


    $scope.sidebarURL = 'partials/tab1_1.html';
    $scope.me = null;

    $scope.setStation = function (id) {
        $scope.me = $scope.stations[id];
    };


});