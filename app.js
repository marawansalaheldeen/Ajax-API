var express = require("express");
var bodyparser = require("body-parser");
var app  = express();


app.use(express.static(__dirname));
app.use(bodyparser.json());

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


app.get('/products',function(req,res){
    res.send({ products: products });
})

app.post('/products', function(req, res) {
    var Name = req.body.name;
    currentid++;

    products.push({
        id: currentid,
        name: Name
    });

    res.send('Successfully created product!');
});


var port =3000;

app.listen(port,()=>{ console.log(`server listen on port ${port}`)});
