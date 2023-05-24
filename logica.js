var estado = document.getElementById("caja");
var resultado = document.getElementById("salida");
console.log(estado.value);

var claves = ["ai", "enter","imes","ober","ufat"];
var llaves = ["a","e","i","o","u"];

var button = document.getElementById("btn-desencriptar");
let salida;
function desencriptar(){
	var entrada=document.getElementById("entrada").value;
	claves.forEach((clave, indice) => {
		salida="";
		let i=0;
		while(i<=entrada.length){
					
			if(entrada.charAt(i)==clave.charAt(0)){
												
				if(clave==entrada.substring(i,i+clave.length)){

					salida=salida+llaves[indice];
					i += clave.length;
				}
							
			}
			salida=salida+entrada.substring(i,i+1);
			i++;
		}
		entrada=salida;

	});
	resultado.value=salida;	
	var estado = document.getElementById("salida");
	estado.style.visibility="visible";

}

function encriptar(){
	var entrada=document.getElementById("entrada").value;
	console.log(entrada);
	intermedio="";
	salida=entrada;
	
	for(let i = 0; i < llaves.length; i++){
        if(entrada.includes(llaves[i])){
            salida = salida.replaceAll(llaves[i], claves[i])

        }
    }

	resultado.value=salida;	
	var estado = document.getElementById("salida");
	estado.style.visibility="visible";
	//console.log(salida);
}
