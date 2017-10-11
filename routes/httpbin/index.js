let fetch = require('node-fetch');
let httpbin = 'https://httpbin.org';

module.exports = function(app){


  app.get('/', function(req,res){

    test(response => {
      res.json(response);
    });

  });
}



function test(callback){
  fetch(httpbin+'/get', {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
    body: '{}'
  }).then(callback).catch(err => {console.log(err);});
}
