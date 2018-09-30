var isLogged = false;
$(function() {
  // Dynamical height with content.
  $(".menuleft").css("height",$(".container").css("height"));
  // Onclick display connection navbar
  $(".profil_connect").click(function(e) {
    $(this).fadeOut();
    $(this).html("");
    element = $(this);
    $.get({
      url: "includes/front/popups/connect.inc.php",
      success: function(html) {
        $(element).html(html);
        $(element).fadeIn();
        $(element).off("click");
        // Validating form inscription and ajaxing
        $("form#people_post").submit(function(e) {
          e.preventDefault();
          $(this).children().find("input").each(function(index,element) {
            console.log($(element).attr('name'));
            console.log(" -> " + $(element).val());
          })
        });
        /// Going to connect
      $("form#people_connect").submit(function(e) {
        e.preventDefault();
        var email,pass;
        $(this).children().find("input").each(function(index,element) {
          if ($(element).attr('name') == "email") {email = $(element).val();}
          if ($(element).attr('name') == "pass") {pass = $(element).val();}
        });
          $.getJSON({
            url: url_api,
            data: {
              api: "token",
              query:"?mail="+email+"&pass="+pass
            },
            success:function(r) {
              if (typeof r.result != "undefined" && r.result) {
                alert("cet utilisateur existe !");
                setCookie("usertoken",r.token,7);
              } else {
                alert("Cet utilisateur n'existe pas ou le mot de passe a été mal saisie. Veuillez réessayer");
                console.log(r);
              }
            },
            error: function(err) {
              console.log(err);
            }
        })
      });
      },
      error: function(err) {
        console.log(err);
        $(element).append("Error");
        $(element).fadeIn();
      }
    })
  });
  // Check if the user is logged
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
  }
  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  if (getCookie("usertoken")) {
    var token = getCookie("usertoken");
    isLogged = token;
    $.getJSON({
      url: url_api,
      data: {
        api: "token",
        query:"?token="+token
      },
      success:function(r) {
        if (r.result) {
          $.get({
            url: "includes/front/navbar.php",
            data: {
              logged:true
            },
            success: function(menuleft) {
              $("#navbar").html(menuleft);
            }
          })
        }
      }
    });
  }
})
