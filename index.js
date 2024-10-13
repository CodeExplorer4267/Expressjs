import express from 'express'
const app = express()
const port=3000;

app.use(function(req,res,next){
  next()
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/contact',(req,res)=>{
  res.send('This is contact')
})

app.listen(port,()=>{
  console.log(`App is listening on port:${port}`)
})