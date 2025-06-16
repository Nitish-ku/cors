// write an html file , that hits the backend server using the 'fetch' api

const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        answer : a + b
    })
})

const port = 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})