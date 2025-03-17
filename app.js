require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const { logger, cors, error } = require("./middleware");
const routes = require("./routes");

const API_URL = process.env.API_URL || "/";
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(cors);
app.use(API_URL, routes);
app.use(error);

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}...`));
