import mysql from 'mysql2/promise.js'
import 'dotenv/config';

<<<<<<< HEAD
=======

>>>>>>> 11f99969081dda3d8563ffc1685081cc0b3b756d
const con = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PWD,
        database: process.env.MYSQL_DB
})

console.log('BD conectado com sucesso!!')

export {con}
