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