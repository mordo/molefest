<?php
require_once ('Email.php');

if (!empty($_POST)) {
	
    try {
		$responseJSON = '';
		//Sending Mail
		   
		$To      = $_POST['Email'];
        $Message = $_POST['Message'];
           
		$Subject = $_POST['Subject'];
		$utilerias->sendMail($To,$Message,$Subject);
		
		$responseJSON = '{"Status":0,"Message":"The email has been sended successfully"}';
		
		echo $responseJSON;
    	
		} catch (Exception $e) {
			$responseJSON = '{"Status":0,"Message":"Sorry we can´t send the email, please try later"}';
    		//print "Ocurrio un error: " . $e->getMessage();
    	}
		
}
?>