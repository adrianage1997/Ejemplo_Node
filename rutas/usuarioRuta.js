const express = require("express")
const ruta = express.Router()

const usuarioController = require("../controlador/usuarioController")

ruta.get("/", usuarioController.findAll);
ruta.get("/cargaInicial", usuarioController.cargaInicial);

module.exports = ruta;