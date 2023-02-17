const Banchojs = require("bancho.js"); // Banchojs is needed for all of these scripts
const client = new Banchojs.BanchoClient(require("bancho.js/config.json"));

client.connect().then(() => {
	console.log("We're online! Now listening for incoming messages.");
	client.on("PM", (message) => {
		if(message.message.indexOf("!hello") == 0)
			message.user.sendMessage("Greetings!");
            if(message.message.indexOf("!delete") == 0)
            message.user.sendMessage("You require permission from TrustedInstaller to delete this file! (I'm not even going to question why you even decided to input such an command...");
            if(message.message.indexOf("!help") == 0)
            message.user.sendMessage("* !help");
            message.user.sendMessage("* !hello");
            message.user.sendMessage("* !delete");


	});
}).catch(console.error);