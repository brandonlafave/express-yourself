app.controller("MainController", ['$scope', function($scope) {
  $scope.birds = [
    {
      birdname: "Cardinal",
      birdcolor: "Red",
      time: new Date('2015', '05', '08')
    },
    {
      birdname: "Canary",
      birdcolor: "Yellow",
      time: new Date('2014', '03', '17')
    },
    {
      birdname: "Blue Jay",
      birdcolor: "Blue",
      time: new Date('1983', '07', '22')
    },    ,
    {
      birdname: "Chicken",
      birdcolor: "Brown",
      time: new Date('2015', '07', '22')
    }
  ];
}]);
