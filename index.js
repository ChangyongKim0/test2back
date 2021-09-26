var bodyParser = require('body-parser');
var express    = require('express');
var mysql      = require('mysql');

var app = express();
const port = 3001;
app.set('port', port);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/api', function(req, res){
    console.log("Hello World!");
    res.send("Hello World!");
    console.log("CTA button is clicked!");
});

app.put('/api/login', function(req, res){
    console.log(req.body.id);
    console.log(req.body.pwd);
    res.send("Hello World!");
});

app.put('/api/cta', (req, res) => {
    console.log("CTA button is clicked: "+req.body.id);
    
});

app.listen(port, () => {
	console.log('Express listening on port', port);
});
