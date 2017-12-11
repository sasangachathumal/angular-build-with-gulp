/**
 * Created by SMSC on 12/11/2017.
 */
var angular = require('angular');
var angularRoute = require('angular-route');

/*
* Routes
* */
var routes = require('./app.route');

var app = angular.module('gulpTest', [angularRoute]);

routes.$inject = ['$routeProvider'];
app.config(routes);
