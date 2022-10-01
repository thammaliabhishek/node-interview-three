const express=require('express');
const app=express();

const cors=require('cors')

const {data,addition}=require('./data');

addition();
console.log(data);

//global middleware


app.use(cors());
app.use((req,res,next)=>{
    console.log("hi i am globalmiddleware");
    next();
})


app.get('/',(req,res)=>{
    res.end("hi ")
})




app.listen(8000,()=>{
    console.log("started")
})