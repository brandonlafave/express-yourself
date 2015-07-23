'use strict';

require('angular/angular');

var birdWatcher = angular.module('birdWatcherApp', []);

//controllers
require('./controllers/MainController.js')(birdWatcher);

//directives
require('./directives/navigationDirective.js')(birdWatcher);
