const MongoClient = require("mongodb").MongoClient;

let uri = process.env.mongodb; //connects to "test"

MongoClient.connect(uri, function(err, client) {
    if (err) throw err;
    const dbo = client.db("test");
    // CREATING A COLLECTION
    // dbo.createCollection("customers", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created.");
    //     client.close();
    // });

    // INSERTING DOCUMENTS
    // let myObj = [
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    // ];
    //
    // dbo.collection("customers").insertMany(myObj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of documents created: " + res.insertedCount);
    //     client.close();
    // });

    // FIND (FIRST) DOCUMENT
    // dbo.collection("customers").findOne({}, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.name);
    //     client.close();
    // });

    // FIND ALL DOCUMENTS
    // dbo.collection("customers").find({}).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     client.close();
    // });

    // DISPLAY PART OF THE INFORMATION
    // THIS DOES NOT WORK. TY MONGOLABS.
    // dbo.collection("customers").find({}, { _id: 0, name: 1 }).toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     client.close();
    // })

    // QUERIES
    // let query = { address: "Main Road 989" };
    // OR USE REGEX (ALWAYS A GOOD IDEA)
    let query = { address: /^S/ };
    dbo.collection("customers").find(query).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        client.close();
    });
});