import express from 'express'
const app = express()
const port=3000;

app.set("view engine","ejs")

app.use(function(req,res,next){
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/profile', function (req, res) {
  res.render("profile")
})

app.get('/profile/:username',(req,res)=>{//zekono username dite pari
  res.send(`This is profile of:${req.params.username}`)//seta ekahne dekhabe
})

app.get('/contact',(req,res)=>{
  res.render("contact")
})

app.listen(port,()=>{
  console.log(`App is listening on port:${port}`)
})