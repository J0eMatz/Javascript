// RELOJ CON FUNCIONES DATE
// Para obtener la fecha del sistema se utiliza DATE.


function RELOJ () {
    const hora_actual= new Date();

    let hora_24 = hora_actual.getHours();
    let minutos = hora_actual.getMinutes();
    let segundos = hora_actual.getSeconds();

    if(hora_24 > 12){
        let hora_12 = hora_24 -12;
        let imprimir_reloj = hora_12 + ":" + minutos + ":" + segundos + " P.M";
        console.log(imprimir_reloj)
        return imprimir_reloj
    }else{
        let imprimir_reloj = hora + ":" + minutos + ":" + segundos + " A.M";
        console.log(imprimir_reloj)
        return imprimir_reloj
    }

    

};

setInterval(RELOJ,1000);


const fechaFunction1 = () => new Date(Date.now()).toLocaleTimeString('it-IT');

setInterval(() =>{
    console.log(fechaFunction1());
}, 1000);