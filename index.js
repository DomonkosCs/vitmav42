const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./route/index')(app);

app.use(express.static('static'));
app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
    res.render("problem", {problemText:err})
    console.log(err);
});

app.listen(3000, () => {
    console.log('Running on :3000');
});
