var request = require('request');
var WebSocket = require('ws');
var ws = new WebSocket('ws://activity.octoblu.com');

ws.on('message', function(data, flags) {
  console.log('MESSAGE', data);
  data = JSON.parse(data);
  if(data.geo.region == "AZ") {
    var color = "#0000FF";
  } else if(data.geo.country == "US"){
    var color = "#00FF00";
  } else {
    var color = "#FF0000";
  }

  request.get('http://127.0.0.1:8934/blink1/fadeToRGB',
    {qs: {'rgb': color}}
    , function (error, response, body) {
    // console.log(body);
  });

  setTimeout(function(){

    request.get('http://127.0.0.1:8934/blink1/fadeToRGB',
      {qs: {'rgb': '#000000'}}
      , function (error, response, body) {
      // console.log(body);
    });    
  },500);

});  




