var skynet = require('skynet');

var conn = skynet.createConnection({
  "uuid": "613f8b90-c9a8-11e3-aa24-e1cb42c326cd",
  "token": "0b84dh9iedp0q9f6rcqub3kfuy0ysyvi",
  "server": "ws://meshblu.octoblu.com", // optional - defaults to ws://skynet.im
  "port": 80  // optional - defaults to 80
});

conn.on('ready', function(data){
  console.log('UUID AUTHENTICATED!');
  console.log(data);

  var WebSocket = require('ws');
  var ws = new WebSocket('ws://activity.octoblu.com');

  ws.on('message', function(data, flags) {
    console.log('MESSAGE', data);
    conn.message({
      "devices": "feadee3e-7cb5-4fb5-93bd-1bcdba8de1c5",
      "subdevice": "blink1",
      "payload": {
        "on":true,
        "rgb":"#00FF00"
      }
    });

    setTimeout(function(){
      conn.message({
        "devices": "feadee3e-7cb5-4fb5-93bd-1bcdba8de1c5",
        "subdevice": "blink1",
        "payload": {
          "on":false,
          "rgb":"#00FF00"
        }
      });
    },500);

  });  

});


