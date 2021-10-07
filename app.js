const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const apiRoutes = require('./api-routes');

// Initialize the app
const app = express();
// Setup server port
const port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('HEYYYY'));
// Launch app to listen to specified port
app.listen(port, () => { console.log(`Running RestHub on port ${port}`); });
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true });

app.use('/api', apiRoutes);
