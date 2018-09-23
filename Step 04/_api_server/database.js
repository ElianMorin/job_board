const mysql2 = require('mysql2').createPool({
    host:'127.0.0.1',
    user:'root',
    database: 'lebonjob',
    waitForConnections: true,
});
const displayPerPage = 15;
function connect(callback) {
  mysql2.getConnection(function(err, conn) {
    if (err) {log.alertMessage(err.message)}
    callback(conn);
    conn.release();
  });
}

module.exports = {
  getjobs: function(page,search,callback) {
    var minPage = displayPerPage*page;
    var maxPage = displayPerPage*(page+1);
    connect(function(mysql) {
      if (search) {
        mysql.query("SELECT id,titre,description FROM  job_advertisements WHERE titre LIKE \"%"+search+"%\" OR description LIKE \"%"+search+"%\" OR description_long LIKE \"%"+search+"%\"  ORDER BY date_creation DESC LIMIT ?,?", [minPage,maxPage], function(err,result) {
          if (err) {
            console.log(err);
            callback({alert:true});
          } else {
            if (result.length == 0) {
              callback({alert:true});
            } else {
              var objResp = {};
              result.forEach(function(res) {
                objResp["job-"+res.id] = {id:res.id,titre:res.titre,description:res.description};
              })
              callback(objResp);
            }
          }
        })
      } else {
        mysql.query("SELECT id,titre,description FROM  job_advertisements ORDER BY date_creation DESC LIMIT ?,?", [minPage,maxPage], function(err,result) {
          if (err) {
            console.log(err);
            callback({alert:true});
          } else {
            if (result.length == 0) {
              callback({alert:true});
            } else {
              var objResp = {};
              result.forEach(function(res) {
                objResp["job-"+res.id] = {id:res.id,titre:res.titre,description:res.description};
              })
              callback(objResp);
            }
          }
        })
      }
    })
  },
  getRow: function(id, row, callback) {
    connect(function(mysql) {
      mysql.query("SELECT "+row+" as row FROM job_advertisements ja WHERE id="+id,function(err,result) {
        if (err) {
          callback({alert:false});
        } else {
          if (result.length == 0) {
            callback({alert:false});
          } else {
            var objResp = {};
            result.forEach(function(res) {
              console.log(res);
              objResp[row] = res.row;
            });
            console.log(result);
            console.log(objResp);
            callback(objResp);
          }
        }
      });
    });
  }
}
