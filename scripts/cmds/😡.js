module.exports = {
 config: {
	 name: "😡",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "😡") {
 return message.reply({
 body: "     「কিরে বলদ রাগ দেখাস কারে ?\nরাগ তোর পুটকি দিয়ে ডুকিয়ে দিবো 」",
 attachment: await global.utils.getStreamFromURL("https://drive.google.com/uc?id=1y7X8okcAe__HNeKZuTbAk-B7aWO7VKkw")
 });
 }
 }
}
