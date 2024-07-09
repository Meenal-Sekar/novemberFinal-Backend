const express=require('express');
const app=express();
const mongoose = require('mongoose');
const routerurl=require('routes')  //router-js
const cors=require('cors'); //supporting middleware package

app.use(express.json());//middleware
app.use(cors())

app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://meenal-sekar:1805vishu@cluster0.nlmbzwb.mongodb.net/Final-db?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log("Database connected");
    }

app.listen(4005,()=>
{
    console.log('server is up and run');
})






// db create/table structure  --->routers---->server-js
