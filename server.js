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
      port = process.env.PORT || 3000;
      
const bot = new SlackBot({
    token: config.API_KEY,
    name: config.BOT_NAME
});

let confirmation = ['yes', 'yes i am', 'yeah', 'of course', 'yup', 'mhm', 'ya', 'ye'];

let userData = {};

bot.on('message', function(data) {
    // all ongoing events 
    console.log(data); 

    if (data.text) {

        let triggerWords = ['hey', 'hi', 'hello', 'yo', 'dude', 'please', 'can'];

        if (data.text.indexOf('kitty') > -1) {
            bot.postMessageToChannel('general', ':cat:');
        }

        if (triggerWords.indexOf(data.text.toLowerCase()) >= 0 && data.username!=='chickenwing'){
            bot.postMessageToChannel('general', 'Meowww are you talking to me?! :smiley_cat:');
            userData.activeUser = data.user;
        }

        if (confirmation.indexOf(data.text.toLowerCase()) >= 0 && data.user===userData.activeUser){
            bot.postMessageToChannel('general', 'Oh, well I wasnt talking to YOU. :cat2:');
        }
    }
});


app.listen(port, function () {
  console.log('Server running on port ' + port);
});