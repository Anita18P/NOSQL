const {ObjectId}=require('mongodb');
const getDb=require('../util/database').getDb;
class User{
  constructor(username,email){
    this.name=username;
    this.email=email;
  }
  save(){
    const db=getDb();
  
    return db.collection('user').insertOne(this)
    // .then(result=>{
    //   console.log(result);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
  }

static findById(userId){
  const db=getDb();
  
   return db.collection('user').findOne({_id:new ObjectId(userId)}).then(user=>{
    console.log('user');
    console.log(user);
    return user;
   }).catch(err=>{
    console.log(err)
   });

  }
}
module.exports = User;