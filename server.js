const express = require('express');
const bodyParser= require('body-parser');
const cors=require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,resp)=>{resp.send('working ')})

const port=process.env.PORT|| 3000;
app.listen(port,()=>{
    console.log(`app is runing on ${port}`)
})