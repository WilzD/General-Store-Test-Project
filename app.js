const express=require('express')
const app=express()

const sequelizeDB=require('./path/database')
// const Product=require('./models/product')

const bodyParser = require('body-parser')
app.use(bodyParser.json({ extended: false }))

const cors=require('cors')
app.use(cors())

const ProductRoute=require('./router/product')

app.use(ProductRoute)

sequelizeDB.sync().then(() => {
    app.listen(3000)
}).catch(err => console.log(err))
app.listen(4000)
