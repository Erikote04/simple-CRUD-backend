const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/api/products', (req, res) => {
    res.send(req.body)
})

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
