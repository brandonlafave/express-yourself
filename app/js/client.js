'use strict';

require('angular/angular');
//require('angular-route');

var birdWatcher = angular.module('birdWatcherApp', []);

//services
require('./services/resourceService.js')(birdWatcher);

//controllers
require('./controllers/MainController.js')(birdWatcher);

//directives
require('./directives/navigationDirective.js')(birdWatcher);
