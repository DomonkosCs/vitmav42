const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./route/index')(app);

app.use(express.static('static'));
app.set('view engine', 'ejs');
app.listen(3000, () => {
    console.log('Running on :3000');
});
