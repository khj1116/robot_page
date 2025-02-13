$(".stepBtnStart").click(function(e){
    e.preventDefault();
    $(".stepbox").removeClass("stop").addClass("start");
  });
  $(".stepBtnStop").click(function(e){
    e.preventDefault();
    $(".stepbox").removeClass("start").addClass("stop");
  });