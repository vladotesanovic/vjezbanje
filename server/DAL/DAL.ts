import Project = ts.server.Project;
var MongoClient = require('mongodb').MongoClient;

export class dataAccess {

    public getData(connection, collectionName) : Promise<any> {

        const collection = connection.collection(collectionName);

        return new Promise((resolve, reject) => {

            collection.find({}).toArray((err, data) => {

                if (err) {
                    return reject(new Error("Greška"))
                }

                return resolve(data);
            });
        });
    }

}


