const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/products", productRoute);

mongoose
    .connect('mongodb+srv://example:s6cUX597LfYnRNvu@backenddb.h2ticen.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected!')
        return
    })
    .then(() => {
        app.listen(3000, () => {
        console.log("Server running on port 3000")
        })
    })
    .catch(() => console.log("Connection failed!"))
