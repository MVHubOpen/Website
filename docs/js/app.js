var app = angular.module("MainApp", ['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider.when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'AboutController'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'ContactController'
    });
    $routeProvider.otherwise({
                                 redirectTo: "/home"
                             });
});

app.controller("HomeController", function($rootScope, $scope, $window) {
    $scope.siteLinks = siteLinks;
    
    $scope.openRepository = (link)=>{
        let url = "https://github.com/MVHubOpen/" + link.repository;
        let target = "MVHubOpen_" + link.repository;
        $window.open(url, target);
    }
});

app.controller("AboutController", function($rootScope, $scope, $window) {
  $scope.version = 1;
});

app.controller("ContactController", function($rootScope, $scope, $window) {

});