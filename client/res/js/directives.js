'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: infcle
 * Date: 25.11.13
 * Time: 08:00
 * To change this template use File | Settings | File Templates.
 */
angular.module('app.directives', [])
    .directive('transDelay', ['$timeout', function($timeout) {
        var index = 0;
        return {
            restrict: 'A',
            link: function($scope, element, attrs) {

//                attrs.$observe('style', function(al){
//                    if(al){
//                        console.log('style exists');
//                    } else {
//                        console.log('style disappeared');
//                    }
//                });


                $timeout(function(){
                    element.css('-webkit-transition-delay', index * 200+'ms');
                    console.log(index);
                    index ++;
                },0);
            }
        };
    }]);