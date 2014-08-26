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
    .directive('mMainPicture', [function () {
        return {
            restrict: 'C',
            link: function ($scope, element, attrs) {
                console.log(element);
                console.log(window.screen.height);
                element.css('height', (window.screen.height) / 2 + 'px');
//                element.css('height', (window.screen.height - 55) / 2 + 'px');
            }
        }
    }])
    .directive('mService', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log('ticker');
                angular.element($window).bind('scroll', function () {
                    console.log('scrolled');
                    if (element[0].getBoundingClientRect().top < window.innerHeight) {
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }])
    .directive('mSvgService', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log('SVG');
                element.bind('click', function () {
                    element.append('<section></section>');
                    console.log('click');
                })
            }
        }
    }])
    .directive('mFooter', ['$window', function ($window) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                console.log('ticker');
                angular.element($window).bind('scroll', function () {
                    console.log('scrolled');
                    if (element[0].getBoundingClientRect().top < window.innerHeight) {
                        element.addClass('isVisible');
                    } else {
                        element.removeClass('isVisible');
                    }
                })
            }
        }
    }]);