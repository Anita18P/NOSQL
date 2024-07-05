const getDb=require('../util/database').getDb;
class Product{
  constructor(title,price,description,imageUrl){
    this.title=title,
    this.price=price,
    this.description=description,
    this.imageUrl=imageUrl
  }
  save(){
    const db=getDb();
    console.log('this');
    console.log(this);
    console.log("db.collection('products')");
    db.collection('products').find().toArray((err,docs)=>{
      if(err){
        reject('error in finding');
      }
      else
      resolve(docs);
    });
    return db.collection('products').insertOne(this).then(result=>{
      console.log(result);
    })
    .catch(err=>{
      console.log(err);
    })
  }
}



module.exports = Product;
