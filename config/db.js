const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RCPHY0', { useNewUrlParser: true });

module.exports = mongoose;
