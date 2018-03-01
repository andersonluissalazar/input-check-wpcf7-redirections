jQuery(document).ready(function($){
	//alert('carregou');
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		// alert('enviou email');
		// configura o redirecionamento

		if ( jQuery( "input[name=numero-de-funcionarios]:checked ").val() == "Grupo A: até 100 pessoas." ) { 

			location='https://abrhsp.org.br/pagamento-pessoa-juridica-grupo-a/';
			alert('grupo a');

		} else if (jQuery( "input[name=numero-de-funcionarios]:checked " ).val() == "Grupo B: de 101 até 500 pessoas."){

			location='https://abrhsp.org.br/pagamento-pessoa-juridica-grupo-b/';
			alert('grupo b');

		} else { 

			location='https://abrhsp.org.br/pagamento-pessoa-juridica-grupo-c/';
			alert('grupo c');
		}

	});
});
