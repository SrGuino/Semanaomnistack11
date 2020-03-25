const express = require('express');

const cors = require('cors'); 

const app = express();

const routes = require('./routes');

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * rota / recursos
 */

 /**
  * metodos http
  * 
  * Get: buscar informacoes do back-end/listar 
  * Post: criar uma informacao no back-end
  * Put: alterar uma informacao no back-end
  * Delete: deletar uma informacao no back-end
  */
 /**
  * Tipos de Parametros
  * Query: Parametros nomeados enviados na rotas apos o simbolo "?" (filtros, paginacao)
  * Route Params: paramentros utilizados para identificar recursos
  * Request Body: corpo da requisicao para criar ou alterar recursos
  */
 /**
  * Banco de dados
  * SQL: MySQL, SQLite, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */

/**
 * driver: Selec* From users
 * query builder: table('table').select('*').where()
 */

