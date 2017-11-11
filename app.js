var express = require('express');
var path = require('path');

var app = express();

const PORT = process.env.PORT || 3000;

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
