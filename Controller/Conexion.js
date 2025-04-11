
//import mysql from 'mysql';
const mysql= require('mysql');

//Conexion Basica
const Conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_Productos'
}); 

Conexion.connect(function(error){
    if(error){
        console.log(' ☠️   ¡No Hay Conexion a La Base De Datos!   ☠️ ')
        console.log(error);
        //throw error;
        return;
    }else{
        console.log(' ¡Conectado a La Base De Datos!   😉👍 ')
    }
});

module.exports= Conexion;
//Conexion.end();
