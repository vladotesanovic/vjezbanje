import * as express from "express";
import {dataAccess} from "./DAL/DAL";
import {fileCreation} from "./routes/fileReader";
import {greeting} from "./routes/index";
import {router} from "./routes/user";
const mongo = require("mongodb");

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/" , router);
app.use("/" , greeting);
app.use("/" , fileCreation);
let connection;

app.get("/", (request, response) => {

    const data: dataAccess = new dataAccess();

    data.getData(connection, "users").then((res) => {

        response.json(res);
    });
});

mongo.connect("mongodb://localhost:27017/noviPonovo").then((db) => {

    connection = db;

    app.listen(3399, () => {
        console.log("Server started");
    });
});