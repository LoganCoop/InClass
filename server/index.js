// Initialize the server Logan Cooper


// Load express module to create a server
const express = require('express');
const PORT = 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on port 8000, IP defaults to
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



console.log("Hello World!");