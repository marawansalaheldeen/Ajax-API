var express = require("express");
var app  = express();

var products = [
    {
        id:1,
        name:'mark'
    },
    {
        id:2,
        name:'daivid'
    },
    {
        id:3,
        name:'eddy'
    }
]
var currentid = 2;  



app.use(express.static(__dirname));
var port =3000;

app.listen(port,()=>{ console.log(`server listen on port ${port}`)});
