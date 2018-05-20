$(document).ready(function(){

// music////////////////////////

  $("#sound_intro")[0].volume = 0.5;
  $("#sound_battle")[0].volume = 0.1;
  $("#sound_sword")[0].volume = 0.3;
  $("#sound_win")[0].volume = 0.3;
  $("#sound_intro, #sound_battle, #sound_sword, #sound_win").hide();

  if($(".start").hasClass('active')){
    $("#sound_intro")[0].play();
    $("#sound_intro").show();
  } else {
    $("#sound_battle")[0].play();
    $("#sound_battle").show();
  }

  if($(".warrior").hasClass('attack')){
    $("#sound_sword")[0].play();
  }


// music end//////////////////////


//menu///////////////////////////

  $('.btn_start').click(function() {
    $("#player1").addClass('active');
  });
  $('.btn_submit').click(function() {
  if($("#player1").hasClass('active'))
  {
  $("#player1").removeClass('active');
  $("#player2").addClass('active');
} else {
  $(".start").removeClass('active');
  $(".field_wrap").addClass('active');
}
  });

  $('.btn_submit').click(function() {
    $("#player1").removeClass('active');
    $("#player2").addClass('active');
  });

});
