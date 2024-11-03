module.exports = {
 config: {
	 name: "🙃",
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
 if (event.body && event.body.toLowerCase() === "🙃") {
 return message.reply({
 body: "     「🌻༉༊😅🥀-তাকে চেয়েছিলাম কিন্তু পায়নি।ღ༊🥀🥰\n\n🖤🌸༊-আজ সে অন্য কারো তবুও তাকে ভুলতে পারিনি।🙂🥀༊ღ࿐😽\n\n••\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\nU L L A S H」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/l4IN7iJ.mp4")
 });
 }
 }
}
