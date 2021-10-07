const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRoutes = require('./api-routes');

// Initialize the app
const app = express();
// Setup server port
const port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to First REST-API'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(`Running the API on port: ${port}`);
});

mongoose.connect('mongodb://localhost/27017');
mongoose.connect('mongodb://localhost/27017', { useNewUrlParser: true });

app.use('/api', apiRoutes);
