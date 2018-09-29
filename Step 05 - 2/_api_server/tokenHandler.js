var jwt = require('jsonwebtoken');
module.exports = {
  generateToken: function(id,mail,password) {
    var token = jwt.sign({id,mail:mail,pass:password}, 'ydntkt');
    return token;
  },
  decodeToken: function(token,callback) {
    console.log("token appelé")
    try {
      var decoded = jwt.verify(token,'ydntkt');
       if (typeof decoded == "undefined") {
        console.log("err2")
        return(false);
      } else {
        console.log("suc1")
        return(decoded);
      }
    } catch(e) {
      console.log("err3")
      return(false);
    }
  }
}
