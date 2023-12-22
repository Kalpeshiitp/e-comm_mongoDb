const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://kalpeshkumar267:mernChatApp@cluster0.8cmjxlo.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb = ()=>{
  if(_db){
    return _db
  } else{
    throw "no data found"
  }
}

module.exports = {
  mongoConnect: mongoConnect,
  getDb: getDb
};
