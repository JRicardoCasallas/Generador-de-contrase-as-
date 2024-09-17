let cantidad = document.getElementById('cantidad');// nombre del id va en los parentesis que es cantidad.
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// En nuestra funcion se va a llamar al boton generar, Porque asi se llama el boton
function generar(){

    let password = "";
    let numeroDigitado = parseInt (cantidad.value);
    if(numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
    }

    for (let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random()* cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }
    contrasena.value = password;
}







