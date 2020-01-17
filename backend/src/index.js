const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()


mongoose.connect('mongodb+srv://alexxharper:alexxharper@cluster0-dslsw.azure.mongodb.net/omnistack10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)







//query params: req.query (Filtros, ordenação, paginação.)
//route params: req.params (Indentificar um recurso na alteração ou remoção)
//body: req.body (Dados da criação ou alteração do registro)