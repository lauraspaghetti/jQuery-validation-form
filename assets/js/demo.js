console.log('demo.js'); 

//When the html page is loaded, jQuery is activated
jQuery(function($){
  console.log('jQuery ready'); 

  var $pseudo = $('#pseudo'),
      $password = $('#password'),
      $confirmation = $('#confirmation'),
      $mail = $('#mail'),
      $submit = $('#submit'),
      $reset = $('#refresh'),
      $error = $('#error'),
      $field = $('.field');

    console.log($submit); 

    $error.css({ display : 'none'});  

    // an event listener is applied to check the user's input when filling out the form
    $pseudo.keyup(function(){
      //If the pseudo length is inferior to 5
      //https://api.jquery.com/val/
      if($(this).val().length < 5){
        //The input becomes red
        //https://api.jquery.com/css/
        $(this).css({
          'border-color' : 'red',
	        color : 'red'
        });
      }
      //else, it becomes green
      else{
        $(this).css({
          borderColor : 'green',
	        color : 'green'
        });
      }
    });

    $password.keyup(function(){
      // if($(this).val().length < 10){
      //   //The input becomes red
      //   //https://api.jquery.com/css/
      //   $(this).css({
      //     'border-color' : 'red',
	    //     color : 'red'
      //   });
      // }
      // //else, it becomes green
      // else{
      //   $(this).css({
      //     borderColor : 'green',
	    //     color : 'green'
      //   });
      // }
      isPasswordValid($password);
    });

    $confirmation.keyup(function(){
      //If the value of the password input does not equal the confirmation one
      //https://api.jquery.com/val/
      if($(this).val() !== $password.val()){
        //The input becomes red
        //https://api.jquery.com/css/
        $(this).css({
          'border-color' : 'red',
	        color : 'red'
        });
      }
      //else, it becomes green
      else{
        $(this).css({
          borderColor : 'green',
	        color : 'green'
        });
      }
    });

    $mail.keyup(function(){
      // $userEmail= $mail.val(); 
      // console.log($userEmail);
      isEmailValid($mail);
    });

    //when user clicks on the submit btn 
    $submit.click(function(e){
      //the submit btn default action is cancelled, preventing it to send the data collected
      e.preventDefault();
      //a function is activated on every input to check if they are not empty
      check($pseudo);
      check($password);
      check($confirmation);
      check($mail);
    });

    //when the refresh btn is clicked
    $reset.click(function(){
      //the inputs style is back to usual
      $field.css({
        borderColor : '#ccc',
        color : '#555'
      });
      //the error message is hidden
      $error.css({
        display : 'none'
      });
    });

    function check(field){
      //if any of the fields is empty 
      if(field.val() === ""){
        $error.css({display : 'block'});
        field.css({
          borderColor: 'red',
          color: 'red'
        });
      }
    }

    function isEmailValid(email){
      //allows only this kind of format : 'string@string.com', what follows behind the dot has to be at least 2 chars long
      var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //if the user's mail matches the format we have set
      if(email.val().match(mailFormat)){
        console.log("Valid email address");
        email.css({
          'border-color' : 'green',
	        color : 'green'
        });
        return true;
      }
      else{
        console.log("email address not valid");
        email.css({
          'border-color' : 'red',
	        color : 'red'
        });
        return false;
      }
    } 

    function isPasswordValid(password){
      //password has to contain : at least a number, at least a lowercase, at least an uppercase, at least a special character
      var passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
      //if the user's password matches the format we have set
      if(password.val().match(passwordFormat)){
        console.log("Valid password");
        password.css({
          'border-color' : 'green',
	        color : 'green'
        });
        return true;
      }
      else{
        console.log("Password not valid");
        password.css({
          'border-color' : 'red',
	        color : 'red'
        });
        return false;
      }
    } 

});



