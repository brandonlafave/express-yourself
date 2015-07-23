'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    var getAll = function(){
      $http.get('/birds').success(function(response){
        console.log(response);
        $scope.birds = response;
      });
    };
    getAll();

  $scope.submitForm = function(oneBirdy) {
      console.log(oneBirdy);
      console.log("Test");
      $http.post('/birds', oneBirdy).success(function(response) {
        getAll();
      });
    };

  $scope.destroy = function(id) {
      console.log(id);
      $http.delete('/birds/' + id).success(function(response) {
        getAll();
      });
    }

    $scope.edit = function(oneBirdy) {
      oneBirdy.editing = true;
      console.log(oneBirdy);
    };

 }]);
};
