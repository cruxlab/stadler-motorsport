/**
 * Created by infcle on 25.04.2014.
 */

var dbController    = require('../controllers/mongodb');

module.exports = {
    findAllMenuItems: function(req, res, next){
//        var data = dbController.findAll('menuitems', function(){console.log('callback')});
        dbController.findAll('features', function(data){
            console.log('callback ');
            console.log(data);
            res.json(data);
            console.log('sent back');
        });

        console.log('navigation findAllMenuItems data');
    }
};
