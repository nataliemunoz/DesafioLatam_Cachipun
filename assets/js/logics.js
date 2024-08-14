// ● Papel le gana a piedra 
// ● Piedra le gana a tijera 
// ● Si ambos jugadores eligen la misma opción es un empate 

// Las opciones son las siguientes: 
// Piedra 1
// Papel  2
// Tijera 3


let cantidadJuegos = parseInt(prompt("Ingresa la cantidad de Juegos: "));

for(i=0; i<cantidadJuegos;i++){
   alert("Compite contra la máquina");
   let cachipun = prompt("Ingresa Opción (seleciona Piedra(1), Papel(2) o Tijeras(3)): ");
   alert("Elegiste,  Piedra(1), Papel(2) o Tijeras(3): " + cachipun);
   let maquina = Math.floor((Math.random() * 3) + 1);
   alert("La máquina eligio: "+ maquina + "\nPiedra(1)\n Papel(2)\n Tijeras(3)\n" );
   let puntajeUsuario=0;
   let puntajeMaquina=0;

   if(cachipun == 1){
        if(maquina == 1){
            alert("Empate");
            }else if(maquina == 2){
                alert("Papel le gana a piedra, gana Máquina");
                puntajeMaquina++;
            }else if(maquina==3){
                alert("Piedra le gana a tijera, gana Usuario");
                puntajeUsuario++;
            }
        }  
   if(cachipun == 2){
        if(maquina == 2){
            alert("Empate");
            }else if(maquina == 1){
                alert("Papel le gana a piedra, gana Usuario");
                puntajeUsuario++;
            }else if(maquina==3){
                alert("Tijera le gana a papel, gana Máquina");
                puntajeMaquina++;
            }
    }      
   if(cachipun == 3){
        if(maquina == 3){
            alert("Empate");
            }else if(maquina == 1){
            alert("Piedra le gana a Tijera, gana Máquina");
            puntajeMaquina++;
            }else if(maquina==2){
            alert("Tijera le gana a papel, gana Usuario");
            puntajeUsuario++;
        }
   }else{
        alert("No elejiste una opción valida");
        }
   
   if (puntajeUsuario > puntajeMaquina){
        alert("Felicitaciones, Ganaste la Partida!\n"+"Por:"+ puntajeUsuario + "juegos.")
        }
    else if (puntajeMaquina > puntajeUsuario){
        alert("Perdiste la Partida!\n" + "Por: " + puntajeMaquina + " juegos.");
        }
    else{
        alert("Empate! Sigue intentando\n"+ "Ambos obtuvieron: " + puntajeUsuario + " y " + puntajeMaquina);
        }
}
