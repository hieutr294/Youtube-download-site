const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
var morgan = require('morgan')

app.use(morgan("combined"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('view engine', 'pug')

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})