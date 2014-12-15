
$('td[data-href]').addClass('clicklink').click(function(e) {
  var target_offset = $($(this).attr('data-href')).offset(),target_top = target_offset.top -145;
  $('html, body').animate({scrollTop:target_top}, 200);
});

$(document).ready(function(){
		if(location.hash != ""){
  var target_offset = $(location.hash).offset(),target_top = target_offset.top -145;
  $('html, body').animate({scrollTop:target_top}, 200);
		}
});
