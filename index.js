const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const rutaCoches = require("./rutas/cocheRuta") //Aqui importamos el cocheRuta
const rutaUsuario = require("./rutas/usuarioRuta")

//middleware son como filtros
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true})) //Lo que tengas en el body, lo que se llama igual, te lo pasa. Esto es sobre todo para dar de alta y no ir campo a campo
app.use("/api/coches", rutaCoches) //Como el RequestParam funciona
app.use("api/admon/usuarios", rutaUsuario)

//Conexión a mongoose -> En la terminal poner arrancarlo -> node index.js
mongoose.connect("mongodb://127.0.0.1:27017/bbdd-coches_2025") //Debe estar la BBDD creada previamente en el MongoDB Compass bbdd-coches_2025. Bueno, cuando insertas datos ya se te crea sola si no existe
.then(() => console.log("Base de datos mongo conectada"))
.catch(() => console.log("Base de datos NOOO conectada"))

app.listen(3000, () => console.log("Arrancando por el puerto 3000"))