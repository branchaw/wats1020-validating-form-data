/* Custom JS goes here. */

// Document ready handler
$(document).on('ready', function(){
  
// Validation object
  $('#order-form').validate({
  
    // Event handler tied to the submit button.
      submitHandler: function(form){
      form.submit(); 
    },
    
    rules: {
      "your-name": {
        required: true,
        lettersonly: true,
        maxlength: 128,
        minlength: 2
      },
      "your-address": {
        required: true
      },
      "your-city": {
        required: true
      },
      "your-state": {
        required: true,
        maxlength: 2,
        minlength: 2,
        lettersonly: true
        //TODO: stretch check state abbrev
      },
      "your-zip": {
        required: true,
        digits: true,
        maxlength: 5,
        minlength: 5
      },
      "card-holder-name": {
        required: true,
        maxlength: 128,
        lettersonly: true        
      },
      "card-number": {
        required: true,
        creditcard: true
      },
      "expiry-month": {
        required: true
      },
      "cvv": {
        required: true,
        maxlength: 3,
        minlength: 3,
        digits: true
      },
      "shipping-method": {
        required: true
      },
       "comments": {
          required: false,
          maxlength: 500
        }
      },    
      messages: {
        "your-name": "Please specify your name in letters only.",
        "your-address": "Enter your street address.",
        "your-city": "Enter your city name.",
        "your-state": "Enter your state's 2-letter abbreviation.",
        "your-zip": "Enter your 5-digit zip code.",
        "card-holder-name": "Please enter the credit card holder name as it appears on the card.",
        "card-number": "Enter your 16-digit credit card number.",
        "expiry-month": "Enter the expiration month and year.",
        "cvv": "Enter the three digit code on the back of your card.",
        "shipping-method": "Please select a shipping method."
      }
    
  });
  
 $.validator.addMethod( "lettersonly", function( value, element ) {
  return this.optional( element ) || /^[a-z]+$/i.test( value );
 }, "Letters only please" );
  
}); 


