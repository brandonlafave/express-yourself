'use strict';

require('angular/angular');
require('angular-route/angular-route');

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

birdWatcher.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/birdlist', {
		templateUrl: '/templates/bird-list-template.html',
		controller: 'MainController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
