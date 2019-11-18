const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  console.log('hello!')
  return res.send('Hello World!')
})

app.post('/', function (req, res) {
  console.log('post!');
  return res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))