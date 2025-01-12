const express = require('express'); // Corrected 'reqire' to 'require'
const path = require('path')
const app = express();

//setup ststic folder

app.use(express.static())

// Define a GET route at the root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.get('/about', (req, res) => {
    res.send('<h1>About<h1>');
});
// Start the server on port 8000
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
