const http= require("http")
const { hostname } = require("os")

const hoatname="127.0.0.1"
const port = 8000

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world')
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})