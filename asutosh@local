var app = require('express')();
var http = require('http').Server(app);

var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 9600
});

app.use(require('express').static(__dirname));
var tempdata;

serialPort.on("open", function () {
  console.log('opened');
  serialPort.on('data', function(data) {
    data = parseInt(data.toString());
    if(data>15 && data<=150){
        console.log("Data recieved is : " + data);
        tempdata = data ;
    }
  });
});

app.get("/data",function(req,res){
  res.send({value : tempdata});
});

http.listen(1337,function(){
  console.log("listning on 1337");
})

