import express = require('express');
import path = require('path');

const app: express.Application = express()

// Serve static files from the React app
app.use(express.static('./client/build'))
app.use(express.static('./client/public'))

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile('./client/public/index.html')
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`Backend listening on port ${port}`)
