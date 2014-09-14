'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: infcle
 * Date: 25.11.13
 * Time: 08:00
 * To change this template use File | Settings | File Templates.
 */
angular.module('app.directives', [])
    .directive('menuIcon', [function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
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
                    animate.setAttribute('attributeName', 'x');
                    animate.setAttribute('from', '10');
                    animate.setAttribute('to', '0');
                    animate.setAttribute('dur', '.5s');
                    animate.setAttribute('fill', 'freeze');
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
                    animate.setAttribute('attributeName', 'x');
                    animate.setAttribute('from', '5');
                    animate.setAttribute('to', '0');
                    animate.setAttribute('dur', '.5s');
                    animate.setAttribute('fill', 'freeze');
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

                element.bind("click", function () {
                    _.each(svgElmts, function (svgElmt) {
                        svgElmt.beginElement();
                    });
                    $scope.toggleNavigation = !$scope.toggleNavigation;
                    $scope.$apply();
                    _.each(svgElmts, function (svgElmt) {
                        var tmp = svgElmt.getAttribute('from');
                        svgElmt.setAttribute('from', svgElmt.getAttribute('to'));
                        svgElmt.setAttribute('to', tmp);
                    });
                });
            }
        };
    }])
/*    .directive('mMainPicture', [function () {
        return {
            restrict: 'C',
            link: function ($scope, element, attrs) {
                console.log(element);
                console.log(window.screen.height);
                element.css('height', (window.screen.height) / 2 + 'px');
//                element.css('height', (window.screen.height - 55) / 2 + 'px');
            }
        }
    }])*/
    .directive('mService', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log('ticker');
                angular.element($window).bind('scroll', function () {
                    if (element[0].getBoundingClientRect().top < window.innerHeight) {
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }])
    .directive('header', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                angular.element($window).bind('scroll', function ($window) {
//                        console.log('lower ');
//                        angular.element(document.querySelector('.header')).css({'opacity':pageYOffset/500});
                    if(this.pageYOffset >250){
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }])
    /*.directive('lServicesWrap', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log('l-services-wrap');
                var factor = 0;
                if($window.innerWidth == 360){
                    factor = 2;
                }
                angular.element(document.querySelector('.l-services-content')).css({'height':((document.getElementsByClassName('m-service')).length*180)/factor+'px'});
            }
        }
    }])*//*
    .directive('mSvgService', ['$window', function ($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log('SVG');
                var toggleServiceContent = false;
                var factor = 0;
                if($window.innerWidth == 360){
                    factor = 2;
                }
//                var defHeightContent = angular.element(document.querySelector('.l-services-content').clientHeight)[0];
//                var minHeightContent = (document.getElementsByClassName('m-service').length*180)/factor;
//                console.log(defHeightContent);
//                console.log(minHeightContent);
//                angular.element(document.querySelector('.l-services-content')).css({'height':minHeightContent+'px'});
                element.bind('click', function () {
                    console.log('click');
                    toggleServiceContent = !toggleServiceContent;
                    angular.element(document.querySelector('.l-services-wrap')).toggleClass('isVisible');
                    if(toggleServiceContent === true){
//                        angular.element(document.querySelector('.l-services-content')).css({'left': '-'+window.innerWidth+'px'});
//                        angular.element(document.querySelector('.l-services-wrap')).css({'height':'1000px'});
//                        angular.element(document.querySelector('.l-services-content')).css({'height':defHeightContent+'px'});
                    } else {
//                        angular.element(document.querySelector('.l-services-wrap')).css({'height':'720px'});
//                        angular.element(document.querySelector('.l-services-content')).css({'left': '0px'});
//                        angular.element(document.querySelector('.l-services-content')).css({'height':minHeightContent+'px'});
                    }
                })
            }
        }
    }])*/
    .directive('mPerspective', [function () {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log('mTeamItemWrap');
                console.log('innerWidth '+window.innerWidth);
                element.css({'-webkit-perspective':window.innerWidth+'px', 'perspective':window.innerWidth+'px'})
            }
        }
    }])
    .directive('mTeamItem', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                angular.element($window).bind('scroll', function () {
                    if (element[0].getBoundingClientRect().top < window.innerHeight) {
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }])
    .directive('mapbox', [function(){
        return {
            restrict: 'C',
            link: function(scope, element, attrs){
                // Provide your access token
                L.mapbox.accessToken = 'pk.eyJ1IjoiY3J1eGxhYiIsImEiOiItNnNvci1NIn0.OtlkvblVC5-XywffKJfUfg';
                // Create a map in the div #map
                L.mapbox.map('map', 'cruxlab.jf0a8fkh');
            }
        }
    }])
    .directive('mFooter', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                angular.element($window).bind('scroll', function () {
                    if (element[0].getBoundingClientRect().top < window.innerHeight) {
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }]);