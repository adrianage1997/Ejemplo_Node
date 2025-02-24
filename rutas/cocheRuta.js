const express = require("express")
const ruta = express.Router()

const cocheController = require("../controlador/cocheController")

ruta.get("/", cocheController.findAll);
ruta.get("/cargaInicial", cocheController.cargaInicial);
ruta.get("/:id", cocheController.findById);
ruta.get("/marca/:marca", cocheController.findByMarca);
ruta.get("/preciomayor/:precio", cocheController.findByPrecioMayor);

ruta.post("/", cocheController.alta);
ruta.put("/:id", cocheController.modificar);
ruta.delete("/:id", cocheController.eliminar);

module.exports = ruta //Para decir que exporta todo este modulo para que luego lo coja el index