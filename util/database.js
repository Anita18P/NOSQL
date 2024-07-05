const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let _db;
const mongoConnect=(callback)=>{
  MongoClient.connect('mongodb+srv://anita18palle:JBYNFiCAtLeOlZUW@cluster0.pzu2v0z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(client=>{
    console.log('connected!');
    _db=client.db('mongodb');
    callback();
  }).catch(err=>{
    console.log(err);
  })
}

const getDb=()=>{
  if(_db){

    console.log('_db');
    console.log(_db);
    return _db;
  }
  throw 'No database Found!';
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;
