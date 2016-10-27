import * as express from "express";
import {router} from "./routes/user";
import {greeting} from "./routes/index";
import {fileCreation} from "./routes/fileReader";

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/" , router);
app.use("/" , greeting);
app.use("/" , fileCreation);

app.listen(3399, () => {

    console.log("Server started");
});