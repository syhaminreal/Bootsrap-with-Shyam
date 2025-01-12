import http from 'http';

const PORT = process.env.PORT;

// Create a server
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 202;
    res.write('Hello world');
  
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
