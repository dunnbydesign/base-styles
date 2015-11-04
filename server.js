const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(__dirname + '/index.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {
        'Content-type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  }

  if (req.url === '/public/stylesheets/reset.css') {
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) throw err
      res.writeHead(200, {
        'Content-type': 'text/css'
      })
      res.write(data)
      res.end()
    })
  }

  if (req.url === '/public/stylesheets/style.css') {
    fs.readFile(__dirname + req.url, (err, data) => {
      if (err) throw err
      res.writeHead(200, {
        'Content-type': 'text/css'
      })
      res.write(data)
      res.end()
    })
  }
})

server.listen(3000, err => {
  if (err) throw err
  console.log('listening on port 3000 ...')
})
