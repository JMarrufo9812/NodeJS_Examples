let express = require('express')      //requrimos el paquete a utilizar
let app = express()                  //la alamcenamos en una variable




app.listen('9812', function (){                                       //utilizamos la variable y creamos una funcion
    console.log("Servidor ejecutando en el puerto 9812")               // imprimimos el resultado 
})

