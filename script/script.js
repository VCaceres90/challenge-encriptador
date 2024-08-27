const caja_textArea = document.querySelector('textArea');
const caja_mensaje = document.getElementById('mensaje');



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btn_botonEncriptar(){
    caja_mensaje.style.backgroundImage = 'none';
    const textoEncriptado = encriptar(caja_textArea.value);
    caja_mensaje.value = textoEncriptado;
    caja_textArea.value = "";
}

function encriptar(stringEncripcada){
    let matrizCodigo = [['e', 'enter'],['i', 'imes'],['a', 'ai'],['o', 'ober'],['u', 'ufat']];
    stringEncripcada = stringEncripcada.toLowerCase(); //Es un método que se utiliza para convertir todas las letras de una cadena de texto (string) a minúsculas. //
    
    for (i=0;  i< matrizCodigo.length; i++){
        if(stringEncripcada.includes(matrizCodigo[i][0])){ //Es un método utilizado que verifica si un determinado valor está presente dentro de la cadena o el array, devolviendo un valor booleano (true o false).//
            stringEncripcada = stringEncripcada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); //El método se utiliza para reemplazar todas las ocurrencias de un valor dentro de una cadena con otro valor. A diferencia de .replace(), que solo reemplaza la primera coincidencia a menos que se use una expresión regular con la bandera global (/g)//
        }
    }
    return stringEncripcada;   
}

function btn_botonDesencriptar(){
    caja_mensaje.style.backgroundImage = 'none';
    const textoDesencriptado = desencriptar(caja_textArea.value);
    caja_mensaje.value = textoDesencriptado;
    caja_textArea.value = "";
    
}


function desencriptar(stringDesencripcada){
    let matrizCodigo = [['e', 'enter'],['i', 'imes'],['a', 'ai'],['o', 'ober'],['u', 'ufat']];
    stringDesencripcada = stringDesencripcada.toLowerCase(); //Es un método que se utiliza para convertir todas las letras de una cadena de texto (string) a minúsculas. //
    
    for (i=0;  i< matrizCodigo.length; i++){
        if(stringDesencripcada.includes(matrizCodigo[i][1])){ //Es un método utilizado que verifica si un determinado valor está presente dentro de la cadena o el array, devolviendo un valor booleano (true o false).//
            stringDesencripcada = stringDesencripcada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); //El método se utiliza para reemplazar todas las ocurrencias de un valor dentro de una cadena con otro valor. A diferencia de .replace(), que solo reemplaza la primera coincidencia a menos que se use una expresión regular con la bandera global (/g)//
        }
    }
    return stringDesencripcada;
}



document.getElementById('botonCopiar').addEventListener('click', () => { //OJO, si se usa .querySelector primero se debe declarar en una varibale, porque .addEventListener causa error
    const areaTexto = document.getElementById('mensaje');
    
    // Usando la Clipboard API para copiar el texto
    navigator.clipboard.writeText(areaTexto.value)
        .then(() => {
            alert('Texto copiado al portapapeles!!');
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar al portapapeles: ', err);
            console.error('Error al copiar al portapapeles: ', err, '\nIntente el comando "CTRL + C"');
        });
});