const express = require("express")
const ruta = express.Router()
const Usuario = require("../modelo/Usuario")
const usuarios = require("../bbdd/usuarios")

class UsuarioController{

    async cargaInicial(req,res){

    }

    async findAll(req,res){
        
    }

}

module.exports = new UsuarioController();