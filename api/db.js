import mysql from 'mysql'
//criando a conexao com o banco de dados.
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arthur12345',
    database: 'history'
})