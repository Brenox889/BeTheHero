const express = require('express'); //importa modulo express
const routes = require('./routes')
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)
/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" muito utilizado para filtros e paginação
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da reposição utilizado para criar recursos
 */


app.listen(3333)