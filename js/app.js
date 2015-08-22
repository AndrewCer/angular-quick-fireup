var app = angular.module("appName", ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    $locationProvider.html5Mode(true);
    // .otherwise({redirectTo: '/'})
})
