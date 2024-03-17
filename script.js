const campo_texto=document.querySelector("#encriptador");
const campo_mensaje=document.querySelector("#respuesta");

const matriz_code=[
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function botonEncriptar(){
    const texto=encriptar(campo_texto.value);
    campo_mensaje.value=texto;
    campo_texto.value="";
    campo_mensaje.style.backgroundImage="none";
}

function encriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada=fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function botonDesencriptar(){
    const texto=desencriptar(campo_texto.value);
    campo_mensaje.value=texto;
    campo_texto.value="";
    campo_mensaje.style.backgroundImage="none";
}

/*function desencriptar(fraseDesencriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada=fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseDesencriptada;
}*/

function desencriptar(fraseDesencriptada){
    for(let i=0;i<matriz_code.length;i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            const regex = new RegExp(matriz_code[i][1], 'g');
            fraseDesencriptada = fraseDesencriptada.replace(regex, matriz_code[i][0]);
        }
    }
    return fraseDesencriptada;
}

function botonCopiar(){
    const textoCopiado=document.getElementById("respuesta");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
    Swal.fire({
        position: "Center",
        icon: "success",
        title: "El texto ha sido copiado",
        toast: true,
        showConfirmButton: false,
        timer: 1500,
        customClass:{
            popup: "copiado",
        },
    });
    document.getElementById("respuesta").value="";
}

function soloLetrasMin(e){
    key=e.keyCode || e.which;
    tecla=String.fromCharCode(key).toString();
    letras="abcdefghijklmnñopqrstuvwxyzü";
    especiales=[8,13,27,32,127,];
    tecla_especial=false
    for(var i in especiales){
        if(key==especiales[i]){
            tecla_especial=true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Error!",
            text: "Carácter no admitido",
            stopKeydownPropaganion: false,        
            showConfirmButton: false,
            timer: 1500,
            customClass:{
                popup: "error",
            },
        });
    }
}
