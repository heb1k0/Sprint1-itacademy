function mostrar(){
    for (var i = 0; i < 10; i++) {
        console.log(i)
    }
}

var arrFunc = [
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
    mostrar(),
]

for (var i = 0; i < arrFunc.length; i++) {
    arrFunc[i];
}