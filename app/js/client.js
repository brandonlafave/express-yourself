'use strict';

require('angular/angular');
require('angular-route');

var birdWatcher = angular.module('birdWatcherApp', ['ngRoute']);

//services
require('./services/resourceService.js')(birdWatcher);

//controllers
require('./controllers/MainController.js')(birdWatcher);

//directives
require('./directives/navigationDirective.js')(birdWatcher);
require('./directives/newBirdFormDirective.js')(birdWatcher);
require('./directives/footerDirective.js')(birdWatcher);

//routes
module.exports = function(app) {
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/birdlist', {
			templateUrl: '/templates/bird_list_template.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
}
