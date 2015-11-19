var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600
});
var tempdata,isconnect=false;
serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
    if(isconnect){
      socket.emit('data',data);
    }
  });
});
io.on('connection' , function(socket){
  console.log('connected');
  isconnect=true;
});
http.listen(1337,function(){
  console.log("Socket listening on 1337");
});

