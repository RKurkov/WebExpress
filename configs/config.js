const db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/WebData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Подключено к базе'))
    .catch((err) => console.log('error'));

module.exports = db;
