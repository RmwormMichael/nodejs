const express = require('express');
const apiRouter = require('./server');
const cors = require('cors')
const { errorLogs, handleError } = require('./middleware/error.handler');
const app = express();
const port = 3000


app.use(cors())
app.use(express.json())

app.get('/',(req, res)=>{  // la request es la peticion y res la respuesta response
    res.send('Hola mundo')
})

apiRouter(app)

app.use(handleError)
app.use(errorLogs)

app.listen(port, (req, res)=> {
    console.log(`escuchando en el puerto ${port}`)
})
