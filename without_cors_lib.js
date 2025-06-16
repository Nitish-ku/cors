///// ALTERNATE METHOD (WITHOUT CORS LIBRARY, HOSTING BOTH FRONTEND AND BACKEND ON THE SAME SERVER)

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

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

