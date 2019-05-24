const cai = require('express').Router();
var request = require('request');
const mongoose = require('mongoose');
var Log = require('../models/logSchema')

var db = mongoose.connect('mongodb://host.docker.internal:27017/test', {
  useNewUrlParser: true
});

cai.get('/', (req, res) => {
  res.status(200).json({
    message: 'Inside CAI!'
  });
});


cai.post('/', (req, res) => {
  var breed = req.body.conversation.memory.breed.raw

  request('https://dog.ceo/api/breed/' + breed + '/images/random', function (error, response, body) {
    obj = JSON.parse(response.body);
    var imageURL = obj.message;
    const dogLogs = new Log({
      url: imageURL,
      breed: breed
    });
    dogLogs.save().then(() => console.log('Record added: ' + dogLogs));
    res.send({
      replies: [{
        "type": "carousel",
        "content": [{
          "title": "Here is the photo you requested",
          "subtitle": breed,
          "imageUrl": imageURL + "",
          "buttons": [{
            "title": breed,
            "type": "web_url",
            "value": imageURL + ""
          }]
        }]
      }],
      conversation: {
        memory: {
          key: 'value'
        }
      }
    })
  })
})

cai.post('/mvp', (req, res) => {
  var breed = req.body.conversation.memory.breed.raw
  Log.count({
    breed: breed
  }, function (err, c) {
    var count = c;
    res.send({
      replies: [{
        "type": "text",
        "content": breed + " has been searched " + count + " times",
      }],
      conversation: {
        memory: {
          key: 'value'
        }
      }
    })
  });
});

module.exports = cai;