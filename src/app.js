require('@google-cloud/debug-agent').start()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(8080, () => {
  console.log('Listening on port 8080')
})
