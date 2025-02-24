const mongoose = require("mongoose")

//Esquema
const usuarioSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true,
        select: false
        
    },
    nombre: {
        type:String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        /*validate: {
            validator: validator.isEmail,
            message: 'El email no es válido'
        },*/
        match: [/^\S+@\S+\.\S+$/, 'El email no es válido']
    },
    enabled: {
        type: Boolean,
        default: true,
        select: false
    },
    rol : {
        type: String,
        required:true,
        trim: true,
        enum: ["ADMON","CLIENTE","DIRECTOR"]
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema) //Para crear el modelo o tabla en BBDD en base a nuestro modelo de usuarioSchema

module.exports = Usuario