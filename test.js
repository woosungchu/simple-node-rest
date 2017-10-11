//https://github.com/bitinn/node-fetch
var fetch = require('node-fetch');
var httpbin = 'https://httpbin.org';

function test(url, method,callback){
  fetch(httpbin+url, {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: '{}'
  }).then(callback).catch(err => {console.log(err);});
}

test('/get','get',response => {

  console.log(response);

});
