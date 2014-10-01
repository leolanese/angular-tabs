angular.module('tabs', ['ngRoute'])

	.config(function airlineRouter($routeProvider) {

            $routeProvider

                // when('path:name', route);
                .when('/', {templateUrl: 'partials/tab1.html',
                    controller: function ($scope) {
                        $scope.setActive('to');
                    }})

                .when('/flights', {template: '<div class="content"><h3>Content Tab2</h3></div>',
                    controller: function ($scope) {
                        $scope.setActive('flights');
                    }})

                .when('/reservations', {templateUrl: 'partials/tab3.html',
                    controller: function ($scope) {
                        $scope.setActive('reservations');
                    }});

        }

);