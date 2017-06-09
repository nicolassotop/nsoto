
 function validation()
 {
    
	var contactname=document.enq.name.value;
	var name_exp=/^[A-Za-z\s]+$/;
	if(contactname=='')
	{
		alert("Debe ingresar un nombre");
		document.enq.name.focus();
		return false;
	}
	else if(!contactname.match(name_exp))
	{
		alert("Nombre inválido");
		document.enq.name.focus();
		return false;
	}
	
	var email=document.enq.email.value;
	//var email_exp=/^[A-Za-z0-9\.-_\$]+@[A-Za-z]+\.[a-z]{2,4}$/;
	var email_exp=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(email=='')
	{
		alert("Debe ingresar una dirección de correo electrónico");
		document.enq.email.focus();
		return false;
	}
	else if(!email.match(email_exp))
	{
		alert("Correo inválido");
		document.enq.email.focus();
		return false;
	}
	
	
	var message=document.enq.message.value;
	if(message=='')
	{
		alert("Debe ingresar un mensaje");
		document.enq.message.focus();
		return false;
	}
    return true;
 }
