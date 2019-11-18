var http = require('http');

module.exports.run = function(){
  
var server = http.createServer();

  server.on('listening',function(){
      console.log('Server is running');
    });

server.listen(process.env.PORT || 5050);

}