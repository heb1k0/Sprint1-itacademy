
// ! Nivell 2

/* Exercici 2  :Invoca una funció que retorni un valor mitjançant template literals. */

function mostrarUsuario(usuario, apellido) {
    return `${usuario} ${apellido}`
}
console.log(`El usuario : ${mostrarUsuario("Alejandro","Zuriguel")}`)

// ! Nivell 3
/* Exercici 1 : Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola.
 Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades. 
*/

function mostrar(){
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
}

var arrFunc = new Array(10)
arrFunc.fill(mostrar)

for (var i = 0; i < arrFunc.length; i++) {
    arrFunc[i][mostrar()]
    console.log(`Vuelta ${i}`)
}

/* Exercici 2: Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari rebut com a paràmetre. */

let auto = function(nombre){
    console.log(nombre); 
}("Alejandro")