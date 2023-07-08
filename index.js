const { Client } = require('pg')

const conexion = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'vehiculos',
    password: 'postgres',
    port: 5432,
});

conexion.connect()

const consulta = "SELECT * FROM tiposdevehiculos";

//Consultas con Async/Await
(async() => {
    try {
        const respuesta = await conexion.query(consulta)
        console.log(respuesta.rows);
    } catch (error) {
        console.log(error.message);
    } finally {
        conexion.end()
    }

})()