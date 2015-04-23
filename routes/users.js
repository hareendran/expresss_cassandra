var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver');
var async = require('async');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'home_security'});

var getHomeById = 'SELECT * FROM activity where home_id=? ';
client.connect(function(err, result) {
    console.log('Connected.');
});
router.get('/search/:query?', function(req, res){
  var query = req.params.query;
  console.log("query is",query);
  client.execute(getHomeById, [query ], function(err, result) {
       if (err) {
           res.status(404).send({ msg : 'Home not found.'+err });
       } else {
           res.json(result);        }
   });
});

module.exports = router;
