 module.exports = {
 config: {
	 name: "😅",
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
 if (event.body && event.body.toLowerCase() === "😅") {
 return message.reply({
 body: " 「•••••যে যাইতে দেয় কেবল সেই তো জানে 😅\n\n°°°°কতটুকু চেষ্টার পর হাল ছাইড়া দিয়া যাইতে দিতে হইছে🙃🫠।𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nU L L A S H」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/8laZAkQ.mp4")
 });
 }
 }
}
