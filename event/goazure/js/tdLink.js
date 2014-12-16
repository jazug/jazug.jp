
$('td[data-href]').addClass('clicklink').click(function(e) {
  var target_offset = $($(this).attr('data-href')).offset(),target_top = target_offset.top;
  $('html, body').animate({scrollTop:target_top}, 200);
});

