import * as express from "express";

const greeting: express.Router = express.Router();

greeting.get("/greeting", (request: express.Request, response: express.Response) => {

    response.json([{

        "greeting" : "hellooooooooo"
    }]);
});

export{ greeting };