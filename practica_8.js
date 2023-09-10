// funcion llamada sayHi que recibe como parametro un nombre y te salude

const sayHi = (nombre) => {
    console.log("Hola"+" "+nombre);
};

sayHi("Joel Martinez");


//2.Crea una funcion llamada executor que reciba como primer parametro una funcion
//y como segundo parametro un string y que en su cuerpo ejecute la funcion recibida 
//y pase como parametro el segundo parametro recibido en esta funcion

const executor = (callback, texto) => {
    callback(texto)
};

const secondary = (cadena_texto) => {
    console.log ("Funcion secundaria ejecutada en callback aprendida en"+" "+cadena_texto)
}

executor(secondary, "Kodemia");


//3.Ejecuta la funcion executor anterior pasando como primer parametro la funcion sayHi 
//y como segundo parametro un string con tu nombre

executor(sayHi, "Joel")


