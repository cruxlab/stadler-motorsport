'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: infcle
 * Date: 04.10.13
 * Time: 14:16
 * To change this template use File | Settings | File Templates.
 */


angular.module('stadler-motorsport', ['ngAnimate', 'ui.router', 'app.ctrl', 'app.service', 'app.directives'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
            .state('/', {
                url: '/',
                views: {
                    'content-ui':   {templateUrl: '/res/partials/main.html'},
                    'header-ui':    {templateUrl: '/res/partials/navigation.html',
                                     controller: 'NavCtrl'}
                }
            })
            .state('/Portfolio',{
                url: '/Portfolio',
                views: {
                    'content-ui': {templateUrl: '/res/partials/portfolio.html',
                                   controller: 'FeatCtrl'},
                    'header-ui':    {templateUrl: '/res/partials/navigation.html',
                        controller: 'NavCtrl'}
                }
            })
            .state('404', {
                url: '*path',
                templateUrl: '/res/partials/404.html'
            })
        ;

        $urlRouterProvider.otherwise('/404');

        $httpProvider.interceptors.push(function($q, $location) {
            return {
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        console.log('responseError interceptor error NOT AUTHORIZED');
                        return $q.reject(response);
                    } else if(response.status === 400){
                        console.log(response.data);
                    } else {
                        console.log('responseError interceptor else');
                        return $q.reject(response);
                    }
                }
            }
        });

    })

        .run (function($rootScope, $location, $http, $log, $state, Auth){
        console.log("app started");
//    $http.get('/menuitems').success(function(data){
//             console.log(data);
//    })
//        .error(function(error){
//
//        });

        $rootScope.$on('$stateChangeStart', function (event, next, current){
            $log.log("URL changed " + new Date().getTime());
            $log.log('next: '+next+' - current: '+current.params);
        });

});
