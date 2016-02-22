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
        lettersonly: true,
        stateUS: true
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
			"expiry-year": {
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
  
		//limits name fields to letters only.	
	 $.validator.addMethod( "lettersonly", function( value, element ) {
		return this.optional( element ) || /^[a-z]+$/i.test( value );
	 } );
  
	//Validates that state abbrevs are US only.
  $.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
  } );
	
	// Bootstrap tooltips
    $('label span.glyphicon').tooltip();
  
}); 


