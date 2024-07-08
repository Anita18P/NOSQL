const path = require('path');
const mongoose=require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const User=require('./models/user');


const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('668be12661aac67a3fd173e7')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  
});

app.use('/admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);
mongoose.connect('mongodb+srv://anita18palle:JBYNFiCAtLeOlZUW@cluster0.pzu2v0z.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
  .then(result=>{
    User.findOne().then(user=>{
      if(!user){
        const user=new User({
          name:"Anita",
          email:"anita18.palle@gmail.com",
          cart:{
            items:[]
          }
        });
        user.save();

      }
    })
    
    app.listen(3000);
  }).catch(err=>{
    console.log(err);
  })
  

