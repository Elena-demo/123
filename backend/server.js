// подключение express
// const express = require("express");

import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import { insertUser } from "./db_controllers.js";
import { select, selectFio } from "./db_controllers.js";

// создаем объект приложения
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// определяем обработчик для маршрута "/"
app.post("/", insertUser);
app.get("/", select)
app.post("/user", selectFio)

app.listen(3000);