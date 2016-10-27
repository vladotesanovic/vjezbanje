/**
 * Handle operations with files
 */
export class fileIO {

    private fs = require('fs');

    constructor(){}

    /**
     * Create new file with initial text
     * @param fileName file name or path with name to file
     * @param initialText text that will be append to this file OPTIONAL PARAM
     */
    createFile(fileName: string, initialText?: string){

        this.fs.writeFile("C:/Users/nihad/Desktop/" + fileName + '.txt', initialText, (err) => {

            if(err)return console.error(err);

            console.log("File created with initial text: " + initialText + "[" + "C:/Users/nihad/Desktop/" + fileName + ".txt]");
        });
    }

    /**
     * Read text from file
     * @param fileName file path or name to file that you want
     */
    getFileContext(fileName: string){

       return this.fs.readFileSync("C:/Users/nihad/Desktop/" + fileName + '.txt').toString();
    }

    /**
     * Append certain text to file
     * @param fileName name of file that you want to user
     * @param textForAdd text that you want to append to @param fileName
     */
    appendToFile(fileName: string, textForAdd: string){

        this.fs.appendFile("C:/Users/nihad/Desktop/" + fileName + '.txt', textForAdd, (err) => {

            if(err) return console.error(err);

            console.log("This text: " + textForAdd + " is append to this file: " + fileName + '.txt');
        });
    }

}