var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver');
var async = require('async');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'home_security'});


router.get('/search/:query?', function(req, res){
  var query = req.params.query;
  console.log("query is",query);
});

module.exports = router;
