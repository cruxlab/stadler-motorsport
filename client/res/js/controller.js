'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: infcle
 * Date: 25.11.13
 * Time: 08:00
 * To change this template use File | Settings | File Templates.
 */

angular.module('app.ctrl', [])

    .controller('MainCtrl', function($scope, $log, $http, $location, Auth, $state){
        $log.log('MainCtrl invocation');
        $http.get('/menuitems').success(function(data){
            console.log(data);
            $scope.menuitems = data;
        })
            .error(function(error){

            });

        $scope.toggleMenu = function(){
            $scope.toggleNavigation = !$scope.toggleNavigation;
        };

//        $scope.changeState = function(){
//            $log.log('changeState');
//            $state.go('/portfolio');
//        }

    })
    .controller('NavCtrl', function($scope, $log, $http, $location){
        $log.log('NavCtrl invocation');
    })
    .controller('FeatCtrl', function($scope, $log, $http, $location){
        $log.log('FeatCtrl invocation');
        $http.get('/features').success(function(data){
            console.log(data);
            $scope.features = data;
        })
            .error(function(error){
            });
    })
    .controller('HistCtrl', function($scope, $log, $http, $location){
        $log.log('HistCtrl invocation');
        $http.get('/nostalgic').success(function(data){
            console.log(data);
            $scope.nostalgic = data;
        })
            .error(function(error){
            });
    })
    .controller('NewsCtrl', function($scope, $log, $http, $location){
        $log.log('NewsCtrl invocation');
        $http.get('/news').success(function(data){
            console.log(data);
            $scope.posts = data;
        })
            .error(function(error){
            });
    });
