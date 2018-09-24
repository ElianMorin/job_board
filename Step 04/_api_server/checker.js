/*******************************************************************************

      CHECKER API LEBONJOB
                                                                          jl&em
*******************************************************************************/
module.exports = {
  checkUser: function(toadd) {
    var regExes = {
      0: /^[a-z0-9\-_ ]{0,255}$/im, /* FIRSTNAME */
      1: /^[a-z0-9\-_ ]{0,255}$/im, /* LASTNAME */
      2: /^[0-9]{1,3}$/, /* AGE */
      3: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/, /* BIRTHDATE */
      4: null, /* DESCRIPTION_HEAD */
      5: null, /* DESCRIPTION_SKILLS */
      6: null, /* description_experience */
      7: null, /* isActive */
      8: null, /* isPro */
      9: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, /* MAIL */
      10: null, /*PASSWORD*/
      11: /^[0-9]{8,12}$/, /* TEL */
      12: null /* image_src */
    };
    if (toadd.length != Object.keys(regExes).length)
      return [false,-1];
    for (var goTo = 0;goTo<toadd.length;goTo++) {
      if (toadd[goTo] != null) {
        if (regExes[goTo] !== null) {
          if (!toadd[goTo].match(regExes[goTo])) {
            console.log('erreur à ('+toadd[goTo]+") + "+ goTo);
            return [false,goTo];
          }
        }
      } else {
        return [false,goTo];
      }
    }
    return [true];
  },
  checkAnnounce: function(queryObj) {
    Object.keys(queryObj).forEach(function(key) {
      var acceptQuery = false;
      switch(key) {
        case "titre":
            acceptQuery=true;
          break;
        case "description":
          acceptQuery=true;
          break;
        case "description_long":
          acceptQuery=true;
          break;
        case "date_creation":
          acceptQuery=true;
          try {
            test = new Date(queryObj[key]);
          } catch(e) {
            acceptQuery=false;
          }
          break;
        case "type_poste":
          //if (queryObj[key].match(/^[a-z0-9_\-]{1,255}$/im)) {
            acceptQuery=true;
          //}
          break;
        case "type_contrat":
          if (["CDD","CDI","INTERIM"].includes(queryObj[key])) {
            acceptQuery=true;
          }
          break;
        case "remun":
          acceptQuery=true;
          break;
        case "adresse":
          acceptQuery=true;
          break;
        case "ville":
          //if (queryObj[key].match(/^[a-z0-9_\-]{1,50}$/im)) {
            acceptQuery=true;
          //}
          break;
        case "code_postal":
          if (queryObj[key].match(/^[0-9]{0,10}$/im)) {
            acceptQuery=true;
          }
          break;
        case "pays":
          //if (queryObj[key].match(/^[a-z0-9_\-]{1,100}$/im)) {
            acceptQuery=true;
          //}
          break;
        case "image_src":
          if (queryObj[key].match(/^[a-z0-9_\-]{0,500}$/im)) {
            acceptQuery=true;
          }
          break;
        case "ownerId":
          if (queryObj[key].match(/^[0-9_\-]{1,500}$/im)) {
            acceptQuery=true;
          }
          break;
        case "isCompany":
          //if (queryObj[key].match(/^[true|false]$/)) {
            acceptQuery=true;
          //}
          break;
      }
      if (!acceptQuery) {
        delete queryObj[key];
      }
    });
  }
}
