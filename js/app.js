var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html'
        }) 
   
        .state('about', {
            url: '/about',
            templateUrl: './partials/about.html'
        })
    
        .state('404', {
            url: '/404',
            templateUrl: './partials/404.html'
        })
    
        .state('aca', {
            url: '/aca',
            templateUrl: './partials/aca.html'
        })

        .state('board', {
            url: '/board',
            templateUrl: './partials/board.html'
        })
     
       .state('locations', {
            url: '/locations',
            templateUrl: './partials/locations.html'
        })
    
       .state('staff', {
            url: '/staff',
            templateUrl: './partials/staff.html'
        })
    
        .state('wise', {
             url: '/wise',
            templateUrl: './partials/wise.html'
        });    
});
