const textArea = document.querySelector (".text-area");
const mensagem = document.querySelector (".mensagem");

// chaves de criptografia
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar () {
    const textEncriptado = encriptar (textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = " ";

}

function encriptar (StringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptada = StringEncriptada.toLowerCase ();

    for (let i = 0; i < matrizCodigo.length; i++) {

    if (StringEncriptada.includes (matrizCodigo [i] [0])) {
        StringEncriptada = StringEncriptada.replaceAll(matrizCodigo [i] [0], matrizCodigo [i] [1]);
    } 
}
return StringEncriptada;

    }


function btnDescriptar () {
    const texDescriptado = descriptar (textArea.value);
    mensagem.value = texDescriptado;
    textArea.value = " ";
}

function descriptar (StringDescriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringDescriptada = StringDescriptada.toLowerCase ();

    for (let i = 0; i < matrizCodigo.length; i++) {

    if (StringDescriptada.includes (matrizCodigo [i] [1])) {
        StringDescriptada = StringDescriptada.replaceAll(matrizCodigo [i] [1], matrizCodigo [i] [0]);
    }
    
}
return StringDescriptada;
}

function btnCopiar () {

let copyText = document.querySelector (".mensagem");
copyText.select ();
document.execCommand ("copy");

}
document.querySelector("#copy").addEventListener("click", copy);