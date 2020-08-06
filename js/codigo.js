/*Navbar*/
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-70px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

/*Boton mapas*/

const modal=document.getElementById('mo');
		const abrir=document.getElementById('abre');
		const close=document.getElementById('cierra');

		abrir.addEventListener('click',()=>{
			modal.setAttribute('open','true');
		})
		close.addEventListener('click',()=>{
			modal.removeAttribute('open');
		})

const modal2=document.getElementById('mod');
		const abrir2=document.getElementById('abierto');
		const close2=document.getElementById('cerrado');

		abrir2.addEventListener('click',()=>{
			modal2.setAttribute('open','true');
		})
		close2.addEventListener('click',()=>{
			modal2.removeAttribute('open');
		})

const modal3=document.getElementById('moda');
		const abrir3=document.getElementById('abriendo');
		const close3=document.getElementById('cerrando');

		abrir3.addEventListener('click',()=>{
			modal3.setAttribute('open','true');
		})
		close3.addEventListener('click',()=>{
			modal3.removeAttribute('open');
		})

const modal4=document.getElementById('modal');
		const abrir4=document.getElementById('abrir');
		const close4=document.getElementById('cerrar');

		abrir4.addEventListener('click',()=>{
			modal4.setAttribute('open','true');
		})
		close4.addEventListener('click',()=>{
			modal4.removeAttribute('open');
		})

function validar(){
      var nombre=document.getElementById('nombre').value;
      var apellido=document.getElementById('apellido').value;
   	  var correo=document.getElementById('correo').value;
   	  var contraseña=document.getElementById('contraseña').value;
   	  
      if (nombre==null || nombre==""){
        alert("Complete su nombre.")
        return false;}
      else if(apellido=null || apellido==""){
        alert("Complete su apellido.") 
        return false;}
       else if(correo=null || correo==""){
       	alert("Escriba su correo, por favor.")
       	return false}
   
        else if(contraseña=null || contraseña=="" || contraseña.length<5){
        alert("Escriba una contraseña con mas de 5 caracteres.") 
        return false;}
        else{
        	alert("Muchas gracias por registrarse.")
        }
}
