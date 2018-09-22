$.(document).ready(function(){
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
});
