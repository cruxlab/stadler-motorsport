/**
 * Created by infcle on 12.02.14.
 */

var _           = require('lodash')
    , path      = require('path'),
    navModel    = require('../models/navigation'),
    featModel   = require('../models/features'),
    nostModel   = require('../models/nostalgic')
    newsModel   = require('../models/news');

var routes = [

{
        path: '/',
        httpMethod: 'GET',
        middleware: [function(req, res){
            res.sendfile('./client/index.html');
        }]
    },
    {
        path: '/res/*',
        httpMethod: 'GET',
        middleware: [function(req, res){
            res.sendfile(path.join('./client'+req.url));
        }]
    },
    {
        path: '/menuitems',
        httpMethod: 'GET',
        middleware: [navModel.findAllMenuItems]
    },
    {
        path: '/features',
        httpMethod: 'GET',
        middleware: [featModel.findAllMenuItems]
    },
    {
        path: '/nostalgic',
        httpMethod: 'GET',
        middleware: [nostModel.findAllMenuItems]
    },
    {
        path: '/news',
        httpMethod: 'GET',
        middleware: [newsModel.findAllMenuItems]
    },
    {
        path: '/*',
        httpMethod: 'GET',
        middleware: [function(req, res, next) {
            var err = new Error();
            err.status = 404;
            next(err);
        },
            function(err, req, res, next){
                if(err.status !== 404){
                    return next();
                }
                res.sendfile('./client/index.html');
            }]
    }

];

var routesApi = [

];

module.exports = function(app) {

    _.each(routesApi, function(routeApi) {
        routeApi.middleware.unshift(ensureAuthorized);

        var args = _.flatten([routeApi.path, routeApi.middleware]);

        switch(routeApi.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + routeApi.path);
                break;
        }
    });

    _.each(routes, function(route) {

        var args = _.flatten([route.path, route.middleware]);

        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });

}

function ensureAuthorized(req, res, next) {
    console.log('ensureAuthorized session '+req.session.name);
    if(!(req.session.name)) return res.send(403)
    return next();
}
