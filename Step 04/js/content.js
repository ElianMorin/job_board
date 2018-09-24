$(document).ready(function(){
    /*
     * LEARN MORE BUTTON - LINKED TO NODEJS API;
     */
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
         url: url_api,
         data: {
           api:"getjobs",
           query:"?onlyRow="+id.split('-')[1]+"-"+"description_long"
         },
         dataType: 'json',
         contentType: 'application/json',
         responseType: 'application/json',
         success:function(res) {
           var newHeight = parseInt($("#"+id).css('height').replace(/[a-z]/gmi,""))*2;
           $(".getjobs-tofill[jobid='"+id+"'").text(res.description_long);
           $("#"+id).first().animate({
             "height":newHeight
           });
         },
         error:function(err){
           console.log("err"+err);
         }
       })
     }
   });
});
