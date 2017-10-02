$(function() {
	
});

saveUser = function (){
	
	var Email      = $('#nombre').val();
	var Message    = $('#apellidos').val();
	var Subject    = $('#email').val();

	$('#contact_message').html('');
	
	$.ajax({
             url: '../pages/mailFiles/sendMail.php',
             type: 'POST',
             data: { 
			          	"Email"         :Email,
	                    "Message"       :Message,
	                    "Subject"       :Subject
					},
             success: function(response) { 
  	          console.log("Respuesta: "+response);
			  responseJSON = JSON.parse(response);			  
			  $('#contact_message').html(responseJSON.Message); 
			  //console.log(visitObject.title);
			 }
            });
};
