
resultado = [];

datosUsuario = tomarDatos();
console.log(jugar());

//0: Piedra, 1: Papel, 2: Tijera
console.log(resultado);

function tomarDatos(){
    nombre=prompt('Ingrese su alias:','');
    correo=prompt('Ingrese su correo:','');
    return {nombre, correo};
}

function jugar(){
    contJugador = 0; contMaquina = 0; contEmpate = 0;
    i = 0;
    while (i <= 2) {
        jugada=prompt('Ingrese un numero para su jugada 0: Piedra, 1: Papel, 2: Tijera','');
        jugadaMaquina = Math.floor(Math.random() * (2-0 + 1)) + 0;
        console.log(`jugada maquina es ${jugadaMaquina}`);
        console.log(`jugada del usuario es ${jugada}`);
        if(jugada == 0){
            if(jugadaMaquina == 0){
                console.log("Empate a piedra");
                contEmpate += 1;
                agregarLista(0);
            }else if (jugadaMaquina == 1) {
                console.log("Gana la maquina");
                contMaquina += 1;
                agregarLista(2);
            }else{
                console.log("Gana el usuario");
                contJugador += 1;
                agregarLista(1);
            }
        }else if (jugada == 1) {
            if(jugadaMaquina == 0){
                console.log("Gana el usuario");
                contJugador += 1;
                agregarLista(1);
            }else if (jugadaMaquina == 1) {
                console.log("empate a papel");
                contEmpate += 1;
                agregarLista(0);
            }else{
                console.log("Gana la maquina");
                contMaquina += 1;
                agregarLista(2);
            }           
        }else if (jugada == 2) {
            if(jugadaMaquina == 0){
                console.log("Gana la maquina");
                contMaquina += 1;
                agregarLista(2);
            }else if (jugadaMaquina == 1) {
                console.log("Gana el usuario");
                contJugador += 1;
                agregarLista(1);
            }else{
                console.log("empate a tijera");
                contEmpate += 1;
                agregarLista(0);
            }
        }
        i++;
    }
    return validarGanador(contEmpate, contJugador, contMaquina);
}

function agregarLista(numero){
    resultado = [...resultado, numero];
}

function validarGanador(empate, jugador, maquina){
    if(maquina > empate && maquina > jugador){
        return `${datosUsuario[0]} su resultado es gana la IA con ${maquina} puntos`;
    }else if(jugador > empate && jugador > maquina){
        return `${datosUsuario[0]} su resultado es gana el jugador con ${jugador} puntos`;
    }else{
        return `${datosUsuario[0]} su resultado es un empate ${empate} punto`;
    }
}