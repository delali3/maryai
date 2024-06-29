const express = require('express');
const siteController = require('./controllers/siteController');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

//setting up template/view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup static file connections
app.use(express.static(__dirname + "/static_files/"));

//start noteController
siteController(app);

//listen to port
app.listen(port);
console.log("Listening to port 3000");