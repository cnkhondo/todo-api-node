// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Hunt deer'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // CHALLENGE
    // db.collection('Users').deleteMany({name: 'Ben Stiller'}).then((results)=>{
    //     console.log(results);
    // });

    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b53526d967937324722dd95")}).then((result) => {
    //     console.log(result);
    // });

    // db.close();
}); 