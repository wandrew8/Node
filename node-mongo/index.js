const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

//The port number where the mongodb server is running
const url = 'mondodb://localhost:27017/';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    assert.strictEqual(err, null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    db.dropCollection('campsites', (err, result) => {
        assert.strictEqual(err, null);
        console.log('Dropped Collection', result);

        const collection = db.collection('campsites');
        collection.insertOne({ name: "Breadcrumb Trail Campground", description: "A camppground" }),
        (err, result) => {
            assert.strictEqual(err, null);
            console.log('Insert Document:', result.ops);

            collection.find().toArray((err, docs) => {
                assert.strictEqual(err, null);
                console.log('Found Documents:', docs);

                client.close();
            });
        }
    })
});