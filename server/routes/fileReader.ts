import {fileIO} from "../helpers/fileIO";
import * as express from "express";
import Response = Express.Response;

const fileCreation = express.Router();
const file = new fileIO();

fileCreation.post('/createfile', (request: express.Request, response: express.Response) => {

    const fileName: string = request.body.filename, fileContext: string = request.body.context;

    file.createFile(fileName, fileContext);
});

fileCreation.put('/updatefile', (request: express.Request, response: express.Response) => {

    const fileName: string = request.body.filename, stringToAppend: string = request.body.stringToAppend;

    file.appendToFile(fileName, stringToAppend);
});

fileCreation.get('/getfilecontext/:filename', (request: express.Request, response: express.Response) => {

    const filename: string = request.params.filename;

    response.json([{

        "filename": filename,
        "filecontext": file.getFileContext(filename)
    }]);
});
//https://www.facebook.com/yugobasket/videos/1316446551720583/

export { fileCreation };