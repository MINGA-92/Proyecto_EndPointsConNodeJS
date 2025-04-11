
import express from 'express';
import bodyParser from 'body-parser'
import fs from 'fs';

const Conexion= require('./Controller/Conexion');
const Constructor = express();
Constructor.use(bodyParser.json());


//Ruta Unica
Constructor.get('/', (req, res) => {
    res.send("¡Hola Verytel!");
});

//Constructor De Conexion
Constructor.listen(4000, function(Peticion, Respuesta){
    console.log("Aplicacion Corriendo En http://localhost:4000         ヾ(⌐■_■)ノ♪ ");
});



//Leer Datos
const LeerData = () => {
    try{   
        const Data = fs.readFileSync("./db.json");
        console.log(JSON.parse(Data));
    }catch(error) {
        console.log(error);
    }
}
LeerData();

//Escribir Datos
const EscribirDatos = () => {
    try{   
        const Data = fs.writeFileSync("./db.json", JSON.stringify(Data));
    }catch(error) {
        console.log(error);
    }
}
EscribirDatos();


//EndPoint Lectura
Constructor.get("/Productos", (req, res)  => {
    const Data = LeerData();
    res.json(Data.Productos);
})


//EndPoint Escritura
Constructor.post("/Productos", (req, res)  => {
    const Data = LeerData();
    const body = req.body;
    const NewProducto= {
        id: Data.Productos.length + 1,
        ...body,
    };
    Data.Productos.push(NewProducto);
    EscribirDatos(NewProducto);
    res.json({message: "Producto Guardado Corretamente"})
})

//EndPoint Actualizar
Constructor.put("/Productos/:id", (req, res)  => {
    const Data = LeerData();
    const body = req.body;
    const id  = parseInt(req.params.id);
    const ProdutoIndex= Data.Productos.findIndex((Producto) => Producto.id === id);
    Data.Productos[ProdutoIndex] = {
        ...Data.Productos[ProdutoIndex],
        ...body,
    };
    EscribirDatos(NewProducto);
    res.json({message: "Producto Actualizado Corretamente"});
});


//EndPoint Eliminar
Constructor.delete("/Productos/:id", (req, res)  => {
    const Data = LeerData();
    const id  = parseInt(req.params.id);
    const ProdutoIndex= Data.Productos.findIndex((Producto) => Producto.id === id);
    Data.Productos.splice(ProdutoIndex, 1);
    EscribirDatos(NewProducto);
    res.json({message: "Producto Eliminado Corretamente"});
});

