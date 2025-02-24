const express = require("express")
const ruta = express.Router()
const Coche = require("../modelo/Coche")
const coches = require("../bbdd/coches")


const eliminar = async (req, res) => { 
    try {
        result = await Coche.findByIdAndDelete(req.params.id)

        if(!result)
            return res.status(404).send("Coche no existe");

        return res.status(200).send("Coche eliminado");
    }catch(err){
        return res.status(500).json({mensaje: "Coche no se ha podido eliminar", err})
    }
}

const modificar = async (req, res) => { 
    try {
        const coche = req.body;
        result = await Coche.findByIdAndUpdate(req.params.id, coche, {new:true, runValidators: true})

        if(!result)
            return res.status(404).send("Coche no existe");

        return res.status(200).send(result);
    }catch(err){
        return res.status(500).json({mensaje: "error interno", err})
    }
}

const alta = async (req, res) => { 
    try {
        const coche = req.body;
        cocheNuevo = new Coche(coche);
        result = await cocheNuevo.save();
        res.status(200).send(result);
    }catch(err){
        return res.status(500).json({mensaje: "error interno", err})
    }
}


const findByPrecioMayor = async (req, res) => { 
    const precioBuscado = req.params.precio
    const coches = await Coche.find({precio: {$gt:precioBuscado}})
    return res.status(200).send(coches);
}

const findByMarca = async (req, res) => { 
    const coches = await Coche.find({marca: req.params.marca})
    return res.status(200).send(coches);
}

const findAll = async (req, res) => { //async es que es un método asincrono. Quiere decir que se ejecuta mientras el programa avanza

    cocheList = await Coche.find(); //El find() es el de MongoDB. El await, es para decir al programa que no siga hasta que termine el metodo 
    return res.status(200).send(cocheList);

}

const cargaInicial = async (req, res) => { 

    await Coche.insertMany(coches); 
    return res.status(200).send("Carga finalizada");

}

const findById = async (req, res) => { 
try{
    coche = await Coche.findById(req.param.id); 

    if(!coche)
        return res.status(404).send("Coche no existe")

    return res.status(200).send(coche);
}catch(err){
    return res.status(500).json({mensaje: "error interno", err})
}
}

module.exports = {
    findAll,
    cargaInicial,
    findById,
    findByMarca,
    findByPrecioMayor,
    alta,
    modificar,
    eliminar
}