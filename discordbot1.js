const Discord = require('discord.js');
const client = new Discord.Client();
 console.log("here its working");
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'bhwu') {
    msg.reply('i lobe u bhut saaaaraa');
  }
  if (msg.content === 'sex?') {
    msg.reply('abhi ni raat me, jungle me mangalll');
  }
  if (msg.content === 'who is chuzi?') {
    msg.reply('obsv man! bhwnaaaaaaaa! the hot chick! on planet');
  }
  if (msg.content === 'who is dugu?') {
    msg.reply('chuuuzzi ka deewana! sabse jabra fan! who loveeeeeeee to drink milk. cow milk* 😎😎');
  }
  if (msg.content === 'i made this baby') {
    msg.reply('dont call me baby u sexist!!!');
  }
  if (msg.content === 'lets ficken') {
    msg.reply('aaja gand marle');
  }
  if (msg.content === 'nahi') {
    msg.reply('oooohhhhhh ladki ky mili u frgt me!!!');
  }

});
 
client.login('Nzk3NDI2MjY2ODAyMzU2MjI0.X_mTFQ.nATSCEAhspeSALnpeWqodBUDFr4');