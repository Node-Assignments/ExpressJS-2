const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res, next) => {
    console.log('Start')
    res.send('<h1>Start</h1>')
    next();
})

app.use('/path', (req, res, next) => {
    console.log('Path')
})

app.use('/', (req, res) => {
    console.log('End')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})