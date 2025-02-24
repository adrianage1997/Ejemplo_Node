const mongoose = require("mongoose")

//Esquema
const cocheSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    precio: Number,
    anio: {
        type: Number,
        required: true,
        min: 2000
    },
    isVendido: {
        type: Boolean,
        default: false
    },
    extras: [String]/*,
    fechaVentas: {
        type: Date,
        default: Date.now
    }*/
},
//Esto es opcional. Es por si quieres que te grabe la versión y las fechas (con campos) de cuando se crea el registros y demás. Lo puedes activar y desactivar aqui
{
    versionKey: false,
    timestamps: true
})

const Coche = mongoose.model('coche', cocheSchema) //Para crear el modelo o tabla en BBDD en base a nuestro modelo de cocheSchema

module.exports = Coche