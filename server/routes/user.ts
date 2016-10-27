import * as express from "express";

const router: express.Router = express.Router();

router.get("/users", (request: express.Request, response: express.Response) => {

    response.json([{
        "ime" : "nihad",
        "prezime" : "delic"
    }]);
});

export{ router };