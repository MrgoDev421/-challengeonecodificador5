
//Textencripted

const copiar = document.getElementById('copiar')
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const acentos =  /[ÁÉÍÓÚÑáéíóúü]/;
const text = document.getElementById ('text');
const error = document.getElementById ('error');
const encriptText = text => {
    return text
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

const unencriptText = text => {
        return text
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
    
    
}

let finalText = '';

function verifyAccent ( text ) {
    let resultado = acentos.test ( text ) ;
    if( resultado != false) {
        error.classList.add( "error" );
    } else {
        error.classList.remove( "error" );
    }
    return resultado;
}

function encript() {
    finalText = '';
    let initialText = text.value.toLowerCase();
    let acentos = verifyAccent( initialText);
    if ( initialText.trim() == '' ) {
        window.location.reload();
    }
    if( initialText !== '' && acentos != true) {
        finalText= encriptText( initialText);
        imagen.classList.add("hideImagen");
        resultado.textContent = finalText;
        
    }
    
}


function unencript() {
    finalText = '';
    let initialText = text.value.toLocaleLowerCase();
    var acentos = verifyAccent ( initialText);
    if ( initialText.trim() == '' ) {
        
    }
    if( initialText !== '' && acentos != true){
        finalText = unencriptText( initialText);
        imagen.classList.add("hideImagen");
        resultado.textContent = finalText;
       
    }
    }

    copiar.addEventListener("click", function() {
        copiarTexto();
    });


    function copiarTexto () {
        const resultadoText = resultado.textContent;
        if (resultadoText !== ''){
            navigator.clipboard.writeText(resultadoText)
            .then(() => alert('Texto copiado!'))
            .catch(error => console.log ('No se pudo copiar el texto', error))
        }
    }


