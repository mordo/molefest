$( document ).ready(function() {
    console.log( "ready!" );
	$('#countDownEvent').countdown('2017/10/01', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span>%w</span> weeks '
      + '<span>%d</span> days '
      + '<span>%H</span> hr '
      + '<span>%M</span> min '
      + '<span>%S</span> sec'));
  });
});

