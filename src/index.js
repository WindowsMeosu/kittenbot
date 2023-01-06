const Banchojs = require("bancho.js");
const client = new Banchojs.BanchoClient({ username: "username", password: "ircpass" });
client.connect().then(() => {
	console.log("Connected");
	client.on("PM", (message) => console.log(`${message.user.ircUsername}: ${message.message}`));
}).catch(console.error);
// uses Bancho.js, use npm i bancho.js and paste your inputs  in unless you want to modify this
