'use strict';

//create your own config.js file that exports an object with your API key and BOT name

const config = require('./config'),
      express = require('express'),
      app = express(),
      path = require('path'),
      fs = require('fs'),
      bodyParser = require('body-parser'),
      https = require('https'),
      SlackBot = require('slackbots'),
      request = require("request"),
      fetch = require('node-fetch'),
      port = process.env.PORT || 3001;
      
const bot = new SlackBot({
    token: config.API_KEY,
    name: config.BOT_NAME
});

let getQuotes = (url) => {
    
    return fetch(url)
    .then(res => res.text())
    .then(body => res.send(body));
};

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/getQuote', (req,res) => {
    let text = req.text;
    switch(text) {
        case '':
        getQuotes('http://seinfeld-api.willcodes.co/random');
    }
});





//slackbot messaging
bot.on('message', function(data) {
    // all ongoing events 
    console.log(data); 

});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});