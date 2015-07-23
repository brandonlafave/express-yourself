'use strict';

require('angular/angular');

var birdWatcher = angular.module('birdWatcherApp', []);

//controllers
require('./controllers/mainController.js')(birdWatcher);

//directives
