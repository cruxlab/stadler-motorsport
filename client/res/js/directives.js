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
    }])

    .directive('menuIcon', [function() {
        return {
            restrict: 'A',
            link: function($scope, element, attrs) {
                console.log('menu');
                console.log(element);
                $scope.toggleNavigation = false;
                var svgElmts = [];
                var SVGNS = "http://www.w3.org/2000/svg";
                var rect1 = document.getElementById('rect1');
                var rect2 = document.getElementById('rect2');

                if (!rect1.firstChild) {
                    console.log('if');
                    var animate = document.createElementNS(SVGNS, 'animate');
                    animate.setAttribute('attributeName','x');
                    animate.setAttribute('from','10');
                    animate.setAttribute('to','0');
                    animate.setAttribute('dur','.5s');
                    animate.setAttribute('fill','freeze');
                    animate.setAttribute('calcMode', 'spline');
                    animate.setAttribute('keySplines', '0.42 0 0.58 1');
                    animate.setAttribute('keyTimes', '0;1');
                    animate.setAttribute('begin', 'click');
                    rect1.appendChild(animate);
                } else {
                    console.log('else');
                    animate = rect1.firstChild;
                }
                svgElmts.push(animate);
                if (!rect2.firstChild) {
                    console.log('if');
                    var animate = document.createElementNS(SVGNS, 'animate');
                    animate.setAttribute('attributeName','x');
                    animate.setAttribute('from','5');
                    animate.setAttribute('to','0');
                    animate.setAttribute('dur','.5s');
                    animate.setAttribute('fill','freeze');
                    animate.setAttribute('calcMode', 'spline');
                    animate.setAttribute('keySplines', '0.42 0 0.58 1');
                    animate.setAttribute('keyTimes', '0;1');
                    animate.setAttribute('begin', 'click');
                    rect2.appendChild(animate);
                } else {
                    console.log('else');
                    animate = rect2.firstChild;
                }
                svgElmts.push(animate);

                element.bind("click", function(){
                    _.each(svgElmts, function(svgElmt){
                        svgElmt.beginElement();
                    });
                    $scope.toggleNavigation = !$scope.toggleNavigation;
                    $scope.$apply();
                    _.each(svgElmts, function(svgElmt){
                        var tmp = svgElmt.getAttribute('from');
                        svgElmt.setAttribute('from', svgElmt.getAttribute('to'));
                        svgElmt.setAttribute('to', tmp);
                    });
                });
            }
        };
    }])
    .directive('menuList', [function() {
        return {
            restrict: 'C',
            link: function($scope, element, attrs, $state) {
                console.log('menu list item');
                console.log(element);
                var svgElmts = [];
//                var SVGNS = "http://www.w3.org/2000/svg";
//                var rect1 = document.getElementById('rect1');
//                var rect2 = document.getElementById('rect2');
//
//                if (!rect1.firstChild) {
//                    console.log('if');
//                    var animate = document.createElementNS(SVGNS, 'animate');
//                    animate.setAttribute('attributeName','x');
//                    animate.setAttribute('from','10');
//                    animate.setAttribute('to','0');
//                    animate.setAttribute('dur','.5s');
//                    animate.setAttribute('fill','freeze');
//                    animate.setAttribute('calcMode', 'spline');
//                    animate.setAttribute('keySplines', '0.42 0 0.58 1');
//                    animate.setAttribute('keyTimes', '0;1');
//                    animate.setAttribute('begin', 'click');
//                    rect1.appendChild(animate);
//                } else {
//                    console.log('else');
//                    animate = rect1.firstChild;
//                }
//                svgElmts.push(animate);
//                if (!rect2.firstChild) {
//                    console.log('if');
//                    var animate = document.createElementNS(SVGNS, 'animate');
//                    animate.setAttribute('attributeName','x');
//                    animate.setAttribute('from','5');
//                    animate.setAttribute('to','0');
//                    animate.setAttribute('dur','.5s');
//                    animate.setAttribute('fill','freeze');
//                    animate.setAttribute('calcMode', 'spline');
//                    animate.setAttribute('keySplines', '0.42 0 0.58 1');
//                    animate.setAttribute('keyTimes', '0;1');
//                    animate.setAttribute('begin', 'click');
//                    rect2.appendChild(animate);
//                } else {
//                    console.log('else');
//                    animate = rect2.firstChild;
//                }
//                svgElmts.push(animate);
                svgElmts.push(document.getElementById('rect1').firstChild);
                svgElmts.push(document.getElementById('rect2').firstChild);

                element.bind("click", function(){
                    _.each(svgElmts, function(svgElmt){
                        svgElmt.beginElement();
                    });
                    $scope.toggleNavigation = !$scope.toggleNavigation;
                    $scope.$apply();
                    _.each(svgElmts, function(svgElmt){
                        var tmp = svgElmt.getAttribute('from');
                        svgElmt.setAttribute('from', svgElmt.getAttribute('to'));
                        svgElmt.setAttribute('to', tmp);
                    });
                });
            }
        };
    }])
    .directive('mListitemsMobile', ['$state', function($state) {
        return {
            restrict: 'C',
            link: function($scope, element, attrs) {
                console.log('menu list item');
                console.log(element);

                element.bind("click", function(){
                    console.log(element.children(1).text().toLowerCase());
                    $state.go('/'+element.children(1).text().toLowerCase());
                });
            }
        };
    }])
    .directive('mListitemsYears', [function() {
        return {
            restrict: 'C',
            link: function($scope, element, attrs) {
                console.log('year list item');
                $scope.$parent.selectedYear = {};
                element.bind("click", function(){
                    if($scope.$parent.selectedYear.year != $scope.year.year) {
                        $scope.$parent.selectedYear = $scope.year;
                        $scope.$parent.$apply();
                        console.log('oldYear log');
                        angular.element(document.querySelectorAll('.m-flipper')).toggleClass('flip');
                        angular.element(document.querySelectorAll('.m-flipper')).toggleClass('isHidden');
                    }
                });
            }
        };
    }])
    .directive('scroll', ['$window', '$state', function($window, $state){
        return {
            restrict: 'A',
            link: function($scope, element, attrs){
                angular.element($window).bind('scroll', function(){
                    console.log(this.pageYOffset);
                    if($state === '/portfolio' || '/history'){
                        angular.element(document.querySelector('#header')).addClass('isShrinked');
                        angular.element(document.querySelector('.l-content')).addClass('isShrinked');
                        angular.element(document.querySelector('.m-navigation')).addClass('isShrinked');
                    }
                        if (this.pageYOffset >= 50) {
//                    if(this.pageYOffset >= 200){
                            console.log('scrolled below header');
                            angular.element(document.querySelector('#header')).addClass('isShrinked');
                            angular.element(document.querySelector('.l-content')).addClass('isShrinked');
                            angular.element(document.querySelector('.m-navigation')).addClass('isShrinked');
//                    } else if(this.pageYOffset <= 50){
                        } else if (this.pageYOffset <= 50 && $state.current.name === '/') {
                            console.log('header is in view');
                            angular.element(document.querySelector('#header')).removeClass('isShrinked');
                            angular.element(document.querySelector('.l-content')).removeClass('isShrinked');
                            angular.element(document.querySelector('.m-navigation')).removeClass('isShrinked');
                        }
                })
            }
        }
    }])
    .directive('mFlipper', [function(){
        return {
            restrict: 'C',
            link: function($scope, element, attrs){
//                $scope.toggleFlip = false;
//                element.bind('touchstart', function(){
//                    $scope.toggleFlip = !$scope.toggleFlip;
//                    $scope.$apply($scope.toggleFlip);
//                    console.log($scope.toggleFlip);
//                });
//                var viewPortToggle = false;
                element.bind('click', function(){
                    angular.element(element).toggleClass('flip');
                    angular.element(element).toggleClass('isHidden');
//                    if(viewPortToggle === false){
//                        element.css('height', (angular.element(window.screen.height)[0]-50)+'px');
//                        viewPortToggle = true;
//                    } else if (viewPortToggle === true) {
//                        element.css('height', '160px');
//                        viewPortToggle = false;
//                    }
//                    console.log(angular.element(window.screen.height)[0]-50);
                    console.log('flip');
                });
            }
        }
    }]);