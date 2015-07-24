'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', 'resource', function($scope, resource) {

    var Bird = resource('birds');

    // var getAll = function(){
    //   Bird.get('/birds').success(function(response){
    //     console.log(response);
    //     $scope.birds = response;
    //   });
    // };
    // getAll();
    $scope.getBirds = function(){
			Bird.getAll(function(response){
				console.log(response);
				$scope.birds = response;
			});
		};

    // $scope.submitForm = function(oneBirdy) {
    //   console.log(oneBirdy);
    //   console.log("Test");
    //   $http.post('/birds', oneBirdy).success(function(response) {
    //     getAll();
    //   });
    // };
    $scope.submitForm = function(oneBirdy) {
			console.log('submitted ' + oneBirdy);
			Bird.submitForm(oneBirdy, function(response) {
				$scope.getBirds();
			});
		};

    // $scope.destroy = function(id) {
    //   console.log(id);
    //   $http.delete('/birds/' + id).success(
    //     function(response) {
    //       console.log(response);
    //       getAll();
    //    }
    //  );
    // };

    $scope.destroy = function(id) {
			console.log(id);
			Bird.destroy(id, function(response) {
				$scope.getBirds();
			});
		};

    // $scope.edit = function(oneBirdy) {
    //   console.log(oneBirdy.editing);
    //   oneBirdy.editing = true;
    //   console.log(oneBirdy.editing);
    // };

    $scope.edit = function(oneBirdy) {
			oneBirdy.editing = true;
			console.log(oneBirdy.editing);
		};

    $scope.cancel = function(oneBirdy) {
      $scope.getBirds();
    };

    // $scope.update = function(oneBirdy) {
		//     console.log(oneBirdy);
    //     $http.put('/birds/' + oneBirdy._id, oneBirdy)
    //     .error(function (error) {
    //       console.log(error);
    //       //$scope.errors.push({msg: 'could not update bird'});
    //     });
		//       oneBirdy.editing = false;
    //       getAll();
    // };
    $scope.update = function(id, oneBirdy) {
			console.log(id);
			Bird.update(id, oneBirdy, function(response) {
				oneBirdy.editing = false;
				$scope.getBirds();
			});
		};

 }]);
};
