'use strict';

module.exports = function(app) {
  app.directive('newBirdFormDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/new-bird-form-template.html',
      replace: true
    }
  });
};
