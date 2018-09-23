var express = require("express");
var app = express();
var db = require('./database.js');
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
// getJobs method //
app.get('/getjobs/page', function(req, res){
  var page;
  if (typeof req.query.page == "undefined") {
    page = 0;
  } else {
    page = req.query.page;
  }
  db.getjobs(page,false,function(r) {
    res.json(r);
  });
});
app.get('/getjobs/search/:search/page', function(req, res){
  var page;
  if (typeof req.query.page == "undefined") {
    page = 0;
  } else {
    page = req.query.page;
  }
  if (typeof req.params.search != "undefined") {
    db.getjobs(page,req.params.search,function(r) {
      res.json(r);
    });
  }
});
app.get('/getjobs/id/:id/row/:row',function(req,res) {
  if (typeof req.params.id != "undefined" && typeof req.params.row != "undefined") {
    db.getRow(req.params.id, req.params.row, function(r) {
      res.json(r);
    });
  }
});
// Only works on 3000 regardless of what I set environment port to or how I set [value] in app.set('port', [value]).
app.listen(3000);
