const express = require ("express");
const app = express();


app.use(express.urlencoded({extended:true}));

function routerLevelMid(req,res,next){
    console.log("router Level");
    next();
}


function applicationLevelmid(){
    console.log("Application Level Mid invoked ");
    // next();
}


    

applicationLevelmid();

// userRoutes

// const userRoutes = require("");

// app.use("api/vi", userRoutes);

// /router level

app.get('/', routerLevelMid, (req,res)=>{
    
    res.sendFile(__dirname + '/index.html');

});

app.get('/about',(req,res)=>{
    
    res.send("This is about page")

});
app.get('/contact',(req,res)=>{
    
    res.send("This is contact page")

});
app.get('/home',(req,res)=>{
    
    res.send("This is home page")

});
app.get('/profile',(req,res)=>{
    
    res.send("This is profile page")

});

app.use((err,req,res,next)=>{
    console.log(err.message);

});

module.exports = app;