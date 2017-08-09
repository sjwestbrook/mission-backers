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
    
        .state('contact', {
            url: '/contact',
            templateUrl: './partials/contact.html'
        })

        .state('services', {
            url: '/services',
            templateUrl: './partials/services.html'
        });
  
});
