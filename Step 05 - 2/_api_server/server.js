/* INCLUDING EXPRESS AND CONFIGURING */
var express = require("express");
var app = express();
var hostname = "localhost";
var port = 3000;
var router = express.Router();
/* LOADING PERSONNAL JS FILES */
var db = require('./database.js'); // Direct access to the database.
var checker = require('./checker.js'); // Checker to allow interractions with the database
var tokenHandler = require('./tokenHandler.js') // Token generator and checker.

/******************************************************************************

          WELCOME TO LEBONJOB API - HERE IS A TABLE OF CONTENTS
              1. CRUD OPERATIONS OF /getjobs/ -> job_advertisements
              2. CRUD OPERATIONS OF /user/ -> people
              3. CRUD OPERATIONS OF /companies/ -> companies

              4. TOKEN GENERATOR & TOKEN DECODER

                                                                        jl&em
******************************************************************************/
// 1.
                                                                        // get
router.route('/getjobs').get(function(req,res) {
  var page = req.query.page;
  var search = req.query.search;
  var id = req.query.id;
  var onlyRow = req.query.onlyRow;
  if (typeof id != "undefined") {
    db.getjobsbyid(id,function(r) {
      res.json(r);
    });
  } else if (typeof onlyRow != "undefined") {
    db.getRow(onlyRow.split("-")[0], onlyRow.split("-")[1], function(r) {
      if (r) {
        res.json(r);
      } else {
        res.json({result:false});
      }
    });
  } else if (typeof search != "undefined") {
    db.getjobs(page,req.query.search,function(r) {
      res.json(r);
    });
  } else if (typeof page != "undefined") {
    db.getjobs(page,false,function(r) {
      res.json(r);
    });
  }                                                                      // post
}).post(function(req,res) {
  checkTokenAccess(req.query.token,res,1,function(r) {
    if (r) {
      var infos = [];
      var ownerInfos = [];
      checker.checkAnnounce(req.query);
      Object.keys(req.query).forEach(function(key) {
        var toadd=-1;
        switch(key){case"titre":toadd=0;break;case"description":toadd=1;break;case"description_long":toadd=2;break;case"date_creation":toadd=3;break;case"type_poste":toadd=4;break;case"type_contrat":toadd=5;break;case"remun":toadd=6;break;case"adresse":toadd=7;break;case"ville":toadd=8;break;case"code_postal":toadd=9;break;case"pays":toadd=10;break;case"image_src":toadd=11}
        switch(key){case"ownerId":ownerInfos[0]=req.query[key];break;case"isCompany":ownerInfos[1] = (req.query[key] == "true") ? 1 : 0;;break;}
        if (toadd!=-1)
          infos[toadd] = req.query[key];
      });
      db.addJob(infos,ownerInfos,function(r) {
        if (r) {
          res.json({result:true});
        } else {
          res.json({result:false});
        }
      });
    }
  });                                                                // delete
}).delete(function(req,res) {
  checkTokenAccess(req.query.token,res,2,function(r) {
    if (r) {
      if (typeof req.query.id != undefined) {
        db.remJob(req.query.id,function(r) {
          if (r) {
            res.json({result:true});
          } else {
            res.json({result:false});
          }
        });
      } else {
        res.send("You have specified wrong informations.");
      }
    }
  });
                                                                        // put
}).put(function(req,res) {
  checkTokenAccess(req.query.token,res,2,function(r) {
    if (r) {
      if (typeof req.query.col != "undefined" && typeof req.query.val != "undefined" && req.query.id != "undefined") {
        db.modifyJob(req.query.id,req.query.col,req.query.val,function(r) {
          if (r) {
            res.json({result:true});
          } else {
            res.json({result:false});
          }
        });
      } else {
        res.send("You have specified wrong informations.");
      }
    }
  });
});

// 2.

router.route('/user').all(function(req,res,next) {
  //checkTokenAccess(req.query.token,res,1,function(r) {
    //if (r) {
      //next();
    //}
  //})                                                                   // post
}).post(function(req,res) {
  var infos = [];
  Object.keys(req.query).forEach(function(key) {
    var toadd = -1;
    switch(key){case"firstname":toadd=0;break;case"lastname":toadd=1;break;case"age":toadd=2;break;case"birthdate":toadd=3;break;case"description_head":toadd=4;break;case"description_skills":toadd=5;break;case"description_experience":toadd=6;break;case"isActive":toadd=7;break;case"isPro":toadd=8;break;case"mail":toadd=9;break;case"password":toadd=10;break;case"tel":toadd=11;break;case"image_src":toadd=12}
    if (toadd!=-1)
    infos[toadd] = req.query[key];
  })
  if (infos.length == 13) {
    if (render = checker.checkUser(infos)[0]) {
      db.userExist("mail",req.query.mail,function(isExist) {
        if (isExist) {
          /* USER ALR EXIST */
          res.json({"result":false,"mess":"Il existe déjà un utilisateur à cette adresse mail !"});
        } else {
          /* ADDAPTING isActive and isPro to integer. */
          infos[7] = (infos[7] == "true") ? 1 : 0;
          infos[8] = (infos[8] == "true") ? 1 : 0;
          db.addUser(infos,function(r) {
            if (r) {
              /* USER AJOUTÉ */
              res.json({"result":true});
            } else {
              /* USER REFUSÉ */
              res.json({"result":false,"mess":"Une erreur interne c'est produite, veuillez contactez l'administrateur."});
            }
          });
        }
      });
    } else {
      /* USER REFUSÉ PAR LE CHECKER */
      res.json({"result":false,"error":render[1]});
    }
  } else {
    res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
  }
                                                                        // get
}).get(function(req,res) {
  if (typeof req.query.id != "undefined") {
    db.getUser(req.query.id,function(r) {
      res.json(r);
    })
  } else {
    res.json({userid:0});
  }
                                                                        // delete
}).delete(function(req,res) {
  if (typeof req.query.id != undefined) {
    db.remUser(req.query.id,function(r) {
      if (r) {
        res.json({result:true});
      } else {
        res.json({result:false});
      }
    });
  } else {
    res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
  }
                                                                        // put
}).put(function(req,res) {
  if (typeof req.query.col != "undefined" && typeof req.query.val != "undefined" && req.query.id != "undefined") {
    db.modifyUser(req.query.id,req.query.col,req.query.val,function(r) {
      if (r) {
        res.json({result:true});
      } else {
        res.json({result:false});
      }
    });
  } else {
    res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
  }
});
// 3. COMPANIES
// post
  router.route('/companies').post(function(req,res) {
    var infos = [];
    Object.keys(req.query).forEach(function(key) {
      var toadd = -1;
      switch(key){case"firstname":toadd=0;break;case"lastname":toadd=1;break;case"age":toadd=2;break;case"birthdate":toadd=3;break;case"description_head":toadd=4;break;case"description_skills":toadd=5;break;case"description_experience":toadd=6;break;case"isActive":toadd=7;break;case"isPro":toadd=8;break;case"mail":toadd=9;break;case"password":toadd=10;break;case"tel":toadd=11;break;case"image_src":toadd=12}
      if (toadd!=-1)
        infos[toadd] = req.query[key];
    })
    if (infos.length == 13) {
      if (render = checker.checkUser(infos)[0]) {
        db.userExist("mail",req.query.mail,function(isExist) {
          if (isExist) {
            /* USER ALR EXIST */
            res.json({"result":false,"mess":"Il existe déjà un utilisateur à cette adresse mail !"});
          } else {
            /* ADDAPTING isActive and isPro to integer. */
            infos[7] = (infos[7] == "true") ? 1 : 0;
            infos[8] = (infos[8] == "true") ? 1 : 0;
            db.addUser(infos,function(r) {
              if (r) {
                /* USER AJOUTÉ */
                res.json({"result":true});
              } else {
                /* USER REFUSÉ */
                res.json({"result":false,"mess":"Une erreur interne c'est produite, veuillez contactez l'administrateur."});
              }
            });
          }
        });
      } else {
        /* USER REFUSÉ PAR LE CHECKER */
        res.json({"result":false,"error":render[1]});
      }
    } else {
      res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
    }
// get
}).get(function(req,res) {
  if (typeof req.query.id != "undefined") {
    db.getUser(req.query.id,function(r) {
      res.json(r);
    })
  } else {
    res.json({userid:0});
  }
  // delete
}).delete(function(req,res) {
  if (typeof req.query.id != undefined) {
    db.remUser(req.query.id,function(r) {
      if (r) {
        res.json({result:true});
      } else {
        res.json({result:false});
      }
    });
  } else {
    res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
  }
// put
}).put(function(req,res) {
  if (typeof req.query.col != "undefined" && typeof req.query.val != "undefined" && req.query.id != "undefined") {
    db.modifyUser(req.query.id,req.query.col,req.query.val,function(r) {
      if (r) {
        res.json({result:true});
      } else {
        res.json({result:false});
      }
    });
  } else {
    res.send("010101100110111101110100011100100110010101100011011101010111001001101001011011110111001101101001011101001100001110101001011101100110111101110101011100110111000001101111011101010111001101110011011001010111001001100001011001101101100011011110110100101101110");
  }
});
router.route('/token').get(function(req,res) {
  console.log(req.query);
  if (typeof req.query.mail != "undefined" && typeof req.query.pass != "undefined") {
    db.checkUser(req.query.mail,req.query.pass,function(row) {
      if (row) {
        var id = row.id;
        var token = tokenHandler.generateToken(id,req.query.mail,req.query.pass);
        res.json({result:true,token:token});
      } else {
        res.json({result:false});
      }
    });
  } else if (typeof req.query.token != "undefined") {
    console.log("Checking token access")
    checkTokenAccess(req.query.token,res,1,function(r) {
      if (r) {
        res.json({result:true});
      } else {
        res.json({result:false});
      }
    })
  } else {
    res.json({result:false});
  }
});
function checkTokenAccess(token, res, levelAccess,callback) {
  // LevelAccess 0 = API ouverte à tous.
  if (levelAccess == 0) {callback(true);return;}
  // LevelAccess 1 & 2 = API nécessite d'être loggé.
  // LevelAccess 1.2 = Loggé et peut requêter que là où il a la permission = son user, ses annonces etc...
  if (typeof token == "undefined") {
    res.send("-=- ERROR -=- Vous n'avez pas spécifié de token.");
  } else if(decodedToken = tokenHandler.decodeToken(token)) {
    if (decodedToken) {
      if (levelAccess == 2) {
        db.isUserAdmin(decodedToken.id,function(r) {
          if (r) {
            callback(true);
          } else {
            res.send("-=- ERROR -=- Vous n'avez pas la permission");
          }
        })
      } else if (levelAccess == 1.2) {
        callback(decodedToken);
      } else if (levelAccess == 1) {
        callback(true);
      }
    } else {
      res.send("-=- ERROR -=- Token inconnu.");
    }
  } else {
    res.send("Vous n'avez pas la permission d'accéder à cette API");
  }
}
app.use(router);
app.listen(port,hostname,function() {
  console.log('API lancée sur le port '+port);
});
