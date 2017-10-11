var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');


// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var index = require('./routes')(app);
var httpbin = require('./routes/httpbin')(app);
// var posts = require('./routes/posts')(app,Post);

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
