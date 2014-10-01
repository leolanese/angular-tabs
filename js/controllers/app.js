function AppCtrl ($scope) {

  $scope.setActive = function (type) {

    // null the
    $scope.toActive = '';
    $scope.busActive = '';
    $scope.reservationsActive = '';

    console.log($scope)

    // adding the active class
    $scope[type + 'Active'] = 'active';

  }

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

  $scope.sidebarURL = 'partials/tab1_1.html';
  $scope.me = null;

  $scope.setStation = function (id) {
    $scope.me = $scope.stations[id];
  };

}