const express = require('express')
const dbConnection = require('./db/db')
const Sample = require('./models/sample')
console.log(Sample)
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/test',async (req,res) =>
{
    try
    {
        const sampleData= new Sample(req.body)
        await sampleData.save()
        res.send(req.body)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
   
})

app.put('/putExample',(req,res)=>
{
    res.send("Data updated")
})

app.delete('/deleteExample',(req,res)=>
{
    res.send("Delete Operation performed")
})

app.listen(port, () => {
  console.log('Server Started')
})