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

app.use(function (err, req, res, next) {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal server error";
	res.status(statusCode).json({ message: message });
});

app.use((req, res, next) => {
	res.status(400).send("Такой страницы не существует!");
});

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен http://${HOST}:${PORT}`);
});