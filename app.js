const express = require('express');
const restAPI = require('./router/routes');
const morgan = require("morgan");
const helmet = require("helmet");
const dbAPI = require("./controllers/controller");

const app = express();
const PORT = 5500;
const HOST = "127.0.0.1";

app.use(express.static('public'));
app.use("/v1", restAPI);
app.use("/db", dbAPI);

app.use(morgan('dev'));
app.use(helmet);

// app.use((err, req, res, next) => {
// 	if (err.statusCode) {
// 		res.status(err.statusCode).send(err.message);
// 	}
// 	else {
// 		res.status(400).json("Отправьте запрос корректно!");
// 	}
// });

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});