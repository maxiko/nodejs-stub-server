var http = require('http');

var return_codes = [200,301,400,401,404,500,502,503]; // <- Return Code List
var max_sleep = 2000;                                 // <- Maximum timeout after which the server responds
var listen_port = 8080;                               // <- Listen port

function sleep(ms) {
  const stop = new Date().getTime() + ms;
  while(new Date().getTime() < stop);
}

var server = http.createServer(function(req, res) {
  ms = Math.floor(Math.random() * max_sleep);
  choice = Math.floor(Math.random() * return_codes.length);
  return_code = return_codes[choice];
  console.log("Sleeping "+ms+"ms and return HTTP/"+ return_code);
  sleep(ms);
  res.writeHead(return_code);
  res.end("You've got HTTP/"+ return_code+" reponse");
});

server.listen(listen_port);