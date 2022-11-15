
var main = function() {
  var volume;
  //The PLAY button
$('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
    
});

$('#pause').click(function(){
    $('#message').text("Track Paused");
    $('#player').trigger("pause");
});




var mute;
$('#mute').click(function(){
$("#player").prop('muted', true);
 $('#message').text("Muted");
});




var unmute;
$('#unmute').click(function(){
$("#player").prop('muted', false);
 $('#message').text("Playing track");
});




$('#stop').click(function(){
  $('#player').trigger("pause");
 $("#player").prop('currentTime', 0); 
  $('#message').text("Track Stopped");
});



$('#volUp').click(function(){
  $('#player').trigger("Volume Up")
   $("#player").prop('volume', 0.1);
   $('#message').text("Volume Up");
});


$('#voldown').click(function(){
  $('#player').trigger("Volume Down")
   $("#player").prop('volume', 0);
   $('#message').text("Volume Down");
});
}
$(document).ready(main);