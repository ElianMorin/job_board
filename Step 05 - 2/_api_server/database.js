/*******************************************************************************

      DATABASE - API LEBONJOB
                                                                          jl&em
*******************************************************************************/
const mysql2 = require('mysql2').createPool({
    host:'127.0.0.1',
    user:'root',
    port: 3308,
    database: 'lebonjob',
    waitForConnections: true,
});
const displayPerPage = 15;
function connect(callback) {
  mysql2.getConnection(function(err, conn) {
    if (err) {console.error(err.message)}
    callback(conn);
    conn.release();
  });
}
/******************************************************************************/
module.exports = {
  /// -> job_advertisements
  /*get*/getjobs: function(page,search,callback) {
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
  /*get*/getjobsbyid: function(id, callback) {
    connect(function(mysql) {
      mysql.query('SELECT * FROM job_advertisements WHERE id=?',[id],function(err,r) {
        if (err) {
          callback(false);
        } else {
          callback(r[0]);
        }
      });
    });
  },
  /*post*/addJob: function(toadd,ownerToAdd,callback) {
    connect(function(mysql) {
      mysql.query("INSERT INTO job_advertisements(`titre`,`description`,`description_long`,`date_creation`,`type_poste`,`type_contrat`,`remun`,`adresse`,`ville`,`code_postal`,`pays`,`image_src`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", toadd, function(err,r) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          mysql.query("INSERT INTO job_owner(`id_job`,`id_owner`,`isCompany`) VALUES(?,?,?)",[r.insertId,ownerToAdd[0],ownerToAdd[1]],function(err,r) {
            if (err) {
              console.log('ADVERT NO OWNER /!\\');
              callback(false);
            } else {
              callback(true);
            }
          });
        }
      });
    });
  },
  /*delete*/remJob: function(id,callback) {
    connect(function(mysql) {
      mysql.query("DELETE ja,jo FROM job_advertisements ja JOIN job_owner jo ON jo.id_job = ja.id WHERE id= ?",[id],function(err,r) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    });
  },
  /*put*/modifyJob: function(id,col,val,callback) {
    connect(function(mysql) {
      mysql.query("UPDATE job_advertisements SET `"+col+"`= \""+val+"\" WHERE id=?",[id],function(err,res) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    });
  },
  /*get*/getRow: function(id, row, callback) {
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
              objResp[row] = res.row;
            });
            callback(objResp);
          }
        }
      });
    });
  },
  /// -> working on people
  /*post*/addUser: function(toadd,callback) {
    connect(function(mysql) {
      mysql.query("INSERT INTO `people`(`firstname`, `lastname`, `age`, `birthdate`, `description_head`, `description_skills`, `description_experience`, `isActive`, `isPro`, `mail`, `password`, `tel`, `image_src`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",toadd,function(err,r) {
        if (err) {
                    console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    });
  },
  userExist: function(col, val, callback) {
    connect(function(mysql) {
      mysql.query("SELECT COUNT(*) As exist FROM people WHERE "+col+"= ?",[val],function(err,result) {
        if (err) {
          callback(false);
        } else {
          callback(result[0].exist);
        }
      });
    });
  },
  checkUser: function(mail, password, callback) {
    connect(function(mysql) {
      mysql.query("SELECT * FROM people WHERE mail = ? AND password = ?",[mail,password],function(err,result) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          if (result.length == 0) {
            callback(false);
          } else {
            callback(result[0]);
          }
        }
      });
    });
  },
  isUserAdmin: function(id,callback) {
    connect(function(mysql) {
      mysql.query("SELECT isAdmin FROM people WHERE id = ?",[id],function(err,res) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(res[0].isAdmin);
        }
      });
    });
  },
  /*get*/getUser: function(id,callback) {
    connect(function(mysql) {
      mysql.query("SELECT * FROM people WHERE id=?",[id],function(err,res) {
        console.log(err);
        console.log(res);
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(res[0]);
        }
      });
    });
  },
  /*delete*/remUser: function(id,callback) {
    connect(function(mysql) {
      mysql.query("DELETE FROM people WHERE id=?",[id],function(err,r) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    });
  },
  /*put*/modifyUser: function(id,col,val,callback) {
    connect(function(mysql) {
      mysql.query("UPDATE people SET `"+col+"`= \""+val+"\" WHERE id=?",[id],function(err,res) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      });
    });
  },
  // working on companies
  /*get*/getCompany: function(id, callback) {
    connect(function(mysql) {
      mysql.query("SELECT * FROM companies  WHERE id=?",[id],function(err,r) {
        if (err) {
          console.error(err.message);
          callback(false);
        } else {
          callback(r[0]);
        }
      });
    });
  },
  /*post*/addCompany: function(toadd,callback) {
    connect(function(mysql) {
      mysql.query("INSERT INTO `companies`(`name`, `adresse`, `ville`, `code_postal`, `pays`, `mail`, `tel`) VALUES (?,?,?,?,?,?,?)",toadd,function(err,r) {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          if (r) {
            callback(true);
          } else {
            callback(false);
          }
        }
      });
    });
  },
  /*put*/
}
