var express = require('express');
var nodeTelegramBotApi = require("node-telegram-bot-api");

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

	setInterval( function setup() {
    console.log("sddss");
    teleAutoname("test","@savekaroq","1175672156:AAEBwj9slXNF9KQzbS4aE4VPc9GHkXq70ds");
	}, 10000)

  function teleAutoname(finalAmazon,chanelName,token){
    var chatId = chanelName; // <= replace with yours
    bot = new nodeTelegramBotApi(token);
    bot.sendMessage(chatId, finalAmazon,{
      disable_web_page_preview: true
    })
  }

module.exports = router;
