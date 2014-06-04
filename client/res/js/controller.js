'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: infcle
 * Date: 25.11.13
 * Time: 08:00
 * To change this template use File | Settings | File Templates.
 */

angular.module('app.ctrl', [])

    .controller('MainCtrl', function($scope, $log, $http, $location, Auth){
        $log.log('MainCtrl invocation');
        $http.get('/menuitems').success(function(data){
            console.log(data);
            $scope.menuitems = data;
        })
            .error(function(error){

            });

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
    });
