var key = require('./config')
var _ = require('lodash')


var RtmClient = require('@slack/client').RtmClient;

var token = key.api.key || '';

var rtm = new RtmClient(token, { logLevel: 'debug' });
rtm.start();


var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function(rtmStartData) {
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
});


var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

rtm.on(RTM_EVENTS.MESSAGE, function(message) {
  console.log(message, 'message')



  var str = message.text;
  var n = str.includes("<@U22QZJNKA>")

 var array = str.split(', ');

var splicedArray = array.splice(1)

var lucky =  _.sampleSize(splicedArray, 2)
var msg = ':laser_cat: meow meow :thinking_face: ??? ' + lucky[0] + ' & ' + lucky[1] + ' today is your lucky day RUFFF RUFFFF :doge:!! :partyparrot: :beers::dealwithitparrot::hypnotoad: '

var params = {
  text: msg,
  // iconEmoji: ':laser_cat:',
  channel_id: 'G20TSFYAX',

}
  if (n) {
    rtm.sendMessage(params.text, params.channel_id, function messageSent() {

    });
  }

});

var RTM_CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS.RTM;





// @gemsrandomizer: 
// who will review my PR today GEMS-1637, @stevene, @greg, @quang, @kpostal




//private G20TSFYAX
// gems C0STU0NUD
