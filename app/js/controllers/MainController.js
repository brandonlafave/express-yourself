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
      $http.delete('/birds/' + id).success(
        function(response) {
          console.log(response);
          getAll();
       }
     );
    };

    $scope.edit = function(oneBirdy) {
      oneBirdy.editing = true;
      console.log(oneBirdy.editing);
    };

    $scope.cancel = function(oneBirdy) {
      getAll();
    };

    $scope.update = function(oneBirdy) {
		    console.log(oneBirdy);
        $http.put('/birds/' + oneBirdy)
        .error(function (error) {
          console.log(error);
          //$scope.errors.push({msg: 'could not update bird'});
        });
		      oneBirdy.editing = false;
          getAll();
    };
 }]);
};
