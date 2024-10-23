import express from "express"
const app=express();
const PORT=4000;


/* Here :userId is a route parameter...that can capture any value and makes them available in the req.params object*/

app.get('/profile/:userid',(req,res)=>{
    res.send(`This is the profile of ${req.params.userid}`)
})

/*This is the multiple route paramter*/
app.get('/profile/:userid/:profilephoto',(req,res)=>{
    res.send(`This is the profile of ${req.params.userid}`)
})

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})