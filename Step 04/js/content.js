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
       var newHeight = parseInt($("#"+id).css('height').replace(/[a-z]/gmi,""))*2;
       $("#"+id).first().animate({
         "height":newHeight
       })
     }
   });
});
