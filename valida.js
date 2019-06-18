
function validacao() {
	var formulario = document.form;
	var nome = formulario.nome;
	var email = formulario.email;
	var telefone = formulario.telefone;
	var cidade = formulario.cidade;
	var uf = formulario.uf;
	var assunto = formulario.assunto
	var msg = formulario.mensagem;
			
	if (nome.value == "") {
	alert("Informe seu nome !");		
		return false;
	}

	if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
		alert("Informe seu e-mail !");	
		return false;
	}
	if (telefone.value == "") {
		alert("Informe seu telefone !");	
		return false;
	}
	if (cidade.value == "") {
		alert(" Informe sua cidade!");	
		return false;
	}
	if (uf.value == "") {
		alert(" Informe seu estado !");	
		return false;
	}
	if (assunto.value == "") {
		alert(" Digite um assunto !");	
		return false;
	}
	if (msg.value == "") {
		
		
		return false;
	}
	abrir();
	return true;			
}
			
function evento(obj) {
	obj.value = obj.value.toUpperCase();
}			
function abrir(){
	document.getElementById('popup').style.display = 'block';
	// alert('Dados enviados com sucesso ! Obrigado pelo contato !');
}
function fechar(){
	document.getElementById('popup').style.display =  'none';
}









		







			
			
			
			
   