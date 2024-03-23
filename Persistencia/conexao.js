import mysql from 'mysql2/promise';

export default async function conectar(){
  /*   if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    else{ */
        const pool = mysql.createPool({
            host: '127.0.0.1', 
            database: 'test', 
            user: 'root', 
            password: '',
            port: 3306
          });

          global.poolConexoes = pool;

          return await pool.getConnection();
    /* } */
}