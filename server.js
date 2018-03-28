const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const favicon = require('serve-favicon');

const movieRoutes = require('./controller/omdbapi.js')

const app = express();

const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 4000;

app.use(express.static(publicPath));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
console.log(movieRoutes);
app.use("/", movieRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('App is running at http://localhost:4000');
});