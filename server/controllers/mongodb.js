/**
 * Created by infcle on 25.04.2014.
 */

var crypto      = require('crypto'),
    MongoDB     = require('mongodb').Db,
    Server      = require('mongodb').Server,
    moment      = require('moment'),
    _           = require('lodash'),
    dbPort      = 27000,
    dbHost      = 'localhost',
    dbName      = 'stadlermotorsport';

var db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
        db.open(function(e, d){
            if (e) {
                console.log(e);
            }	else{
                console.log('connected to database :: ' + dbName);
//                db.collection('menuitems').find()
//                    .toArray(function(error, results){
//                    console.log(results)
//                });
//                console.log(db.collection('menuitems').find(function(error, results){console.log(results)}));
            }
        });

var menuitems = db.collection('menuitems');



module.exports = {
    findAll: function(param, next){
        console.log('mongodb controller findAll');
        console.log(param);
//        console.log(db.collection(param).find().toArray(function(error, results){console.log(JSON.parse(JSON.stringify(results)))}));
        db.collection(param).find()
            .toArray(function(error, results){
                next(results);
            });
    }
};
