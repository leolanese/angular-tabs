function AppCtrl ($scope) {

  $scope.setActive = function (type) {
    $scope.destinationsActive = '';
    $scope.busActive = '';
    $scope.reservationsActive = '';

    $scope[type + 'Active'] = 'active';
  }

  $scope.stations = {
    "BIS": {
      "id": "BIS",
      "name": "Bishop Stortford",
      "city": "Essex",
      "tos": [
        "Cambridge",
        "London"
      ]
    },
    "LTD": {
      "id": "LTD",
      "name": "Liverpool Street",
      "city": "London",
      "tos": [
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