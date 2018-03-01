jQuery(document).ready(function($){
	//alert('carregou');
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		// alert('enviou email');
		// configura o redirecionamento

		if ( jQuery( "input[name=name-do-input]:checked ").val() == "a" ) { 

			location='url-para-direcionamento';

		} else if (jQuery( "input[name=name-do-input]:checked " ).val() == "b"){

			location='url-para-direcionamento';

		} else { 

			location='url-para-direcionamento';
		}

	});
});
