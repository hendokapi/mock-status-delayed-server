'use strict'
const express = require('express')
const morgan = require('morgan')
var cors = require('cors')

const PORT = 3000
const app = express()

app.use(cors())
app.use(morgan('tiny'))

app.all('/status/:statusCode/delay/:delayInSeconds', (req, res) => {
	setTimeout(() => {
		const statusCode = parseInt(req.params.statusCode)
		res.status(statusCode)
		res.send({ statusCode })
	}, req.params.delayInSeconds * 1000)
})

app.listen(3000, () => console.log(`Server is running at port ${PORT}`))
