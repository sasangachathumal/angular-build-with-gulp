/**
 * Created by SMSC on 12/11/2017.
 */
var routes = function ($routeProvider) {

    $routeProvider
        .when('/',{
            redirectTo: '/index'
        })
        .when('index',{
            templateUrl: 'index.html'
        });

};
module.exports = routes;