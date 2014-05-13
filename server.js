
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    MongoStore  = require('connect-mongo')(express);

// all environments
app.set('port', process.env.PORT || 3333);
app.set('views', __dirname + '/client/partials');
app.set('view engine', 'html');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('MiFCn:Gg7G)TCtY4sp'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '/client')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./server/routes/routes.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
