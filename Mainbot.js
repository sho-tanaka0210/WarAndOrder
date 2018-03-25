const Discord = require("discord.js");
const client = new Discord.Client();

require('date-utils');
var now = new Date();

var channelId = 'Discrod’s channel Id';

client.on("ready", () => {
	console.log("ログインしました。");
});

client.on("message", (message) => {
	
	if (message.content.startsWith("!領地防衛")) {
		if(now.toFormat('DDD') === "Sun"){
			message.guild.channels.get(channelId).send("**領地防衛は本日22時半からです!**");
		}
		else{
			message.guild.channels.get(channelId).send("領地防衛は本日ではありません!");
		}
	}
	if (message.content.startsWith("!連盟挑戦")) {
		if(now.toFormat('DDD') === "Fri"){
			message.guild.channels.get(channelId).send("**連盟挑戦は本日22時半からです!**");
		}else{
			message.guild.channels.get(channelId).send("連盟挑戦は本日ではありません!");
		}
	}
	
	/*message.channel.startTyping();
	message.channel.stopTyping();*/
});

client.login("NDEzMzUyNDMyODMyMDg2MDU2.DWXm_A.JYDiw006SkcoTSpPPZaElqi_Woc");