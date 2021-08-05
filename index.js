var bodyParser=require("body-parser");
var express = require("express");
var mongoose=require("mongoose");

const route=require('./routes/route');

var cors=require("cors");
var path=require("path");
var app=express()
const port=3000;
app.get('/',(req,res)=>{
    res.send("foobar");
});z
app.listen(port,()=>{
    console.log("server started at:"+port);
})


//connect to mongodb

mongoose.connect("mongodb://localhost:27017/contactlist");

mongoose.connection.on('connected',()=>{
  console.log("connected to db");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api',route)



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.use(cors());


app.use(express.static(path.join(__dirname,'public')))






mongoose.connection.on('error',()=>{
  if (err){
    console.log(err);
  }
});
