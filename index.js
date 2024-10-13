import express from 'express'
const app = express()
const port=3000;

app.set("view engine","ejs")

app.use(function(req,res,next){
  next()
})
app.use(express.static('./public'))//static file configure

app.get('/', function (req, res) {
   throw new Error('This is error')
})
app.get('/profile', function (req, res) {
  res.render("profile",{age:34})
})

app.get('/profile/:username',(req,res)=>{//zekono username dite pari
  res.send(`This is profile of:${req.params.username}`)//seta ekahne dekhabe
})

app.get('/contact',(req,res)=>{
  res.render("contact",{num:573938})
})

app.get('/error',(req,res,next)=>{
   throw Error("Something went wrong")
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(port,()=>{
  console.log(`App is listening on port:${port}`)
})