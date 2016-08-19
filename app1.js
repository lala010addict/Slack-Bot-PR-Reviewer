var SlackBot = require('slackbots');
var key = require('./config')
var _ = require('lodash')

// create a bot
var bot = new SlackBot({
  token: key.api.key, // Add a bot https://my.slack.com/services/new/bot and put the token 
  name: 'GEMS PR Reviewer Randomizer'
});

var params = {
  icon_emoji: ':laser_cat:',
  channel: 'private_gems',
  text: 'meow!'
};

bot.on('start', function() {
  // more information about additional params https://api.slack.com/methods/chat.postMessage

  // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
  params.text = 'meow! meow!'
  bot.postMessageToChannel(params);

  // define existing username instead of 'user_name'
  // bot.postMessageToUser('user_name', 'meow!', params);

  // // If you add a 'slackbot' property, 
  // // you will post to another user's slackbot channel instead of a direct message
  // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

  // define private group instead of 'private_group', where bot exist
  bot.postMessageToGroup('private_gems', 'meow?????', params);
});


bot.on('message', function(data) {
  // all ingoing events https://api.slack.com/rtm 
  console.log(data, 'data');

  if (data.type === 'message') {
    var str = data.text;
    var n = str.includes("<@U22QZJNKA>")
      // && _.indexOf(data.text, '<@U22QZJNKA>') != -1
    console.log(data.text, 'texttttt')
    console.log(n, 'nnnnnn')
      // if (n === true) {
      //     console.log('post??')
    params = {
      icon_emoji: ':laser_cat:',
      channel: 'private_gems',
      text: 'meow!'
    };
    bot.postMessageToChannel(params);
    // }
  }
});
