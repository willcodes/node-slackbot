'use strict';

//create your own config.js file that exports an object with your API key and BOT name

const config = require('./config').CONFIG,
      express = require('express'),
      app = express(),
      path = require('path'),
      fs = require('fs'),
      https = require('https'),
      SlackBot = require('slackbots'),
      request = require("request"),
      port = process.env.PORT || 3001;
      
const bot = new SlackBot({
    token: config.API_KEY,
    name: config.BOT_NAME
});

let userData = {};

bot.on('message', function(data) {
    // all ongoing events 
    console.log(data); 

});


app.listen(port, function () {
  console.log('Server running on port ' + port);
});