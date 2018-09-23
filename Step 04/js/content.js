$(document).ready(function(){
  $("#moreDesc").hide();
   $(".show_more").click(function(){
     if ($("#moreDesc").is(":hidden") == true) {
         $("moreDesc").show();
         $(".show_more").val('HIDE');
     }
     else {
         $("#moreDesc").hide();
         $(".show_more").val('SHOW');
     }

   });
   $(".activator,.desactivator").click(function(e) {
     e.preventDefault();
     var id = $(this).attr('jobid');
     if ($(this).attr('action') == "close") {
       var newHeight = parseInt($("#"+id).css('height').replace(/[a-z]/gmi,""))/2;
       $("#"+id).first().animate({
         "height":newHeight
       })
     } else {
       $.getJSON({
         url: url_api+"getjobs/id/"+id.split('-')[1]+"/row/description_long",
         crossDomain: true,
         dataType: 'jsonp',
         contentType: 'application/json',
         responseType: 'application/json',
         xhrFields: {
            withCredentials: true
        },
         success:function(res) {
           console.log(res);
           var newHeight = parseInt($("#"+id).css('height').replace(/[a-z]/gmi,""))*2;
           $("#"+id).first().animate({
             "height":newHeight
           })
         },
         error:function(err){
           console.log("err"+err);
         }
       })
     }
   });
});
