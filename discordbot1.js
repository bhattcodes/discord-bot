const Discord = require('discord.js');
require('dotenv').config();
let prefix = "!";

const client = new Discord.Client();
console.log("here its working");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {


  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

  if (command === 'bj-de') {
    if (!args.length) {
      return message.channel.send(`Jisko bolra hai uska naam toh likh gandu ${message.author}!`);
    }
    const taggedUser = message.mentions.users.first();

    if (!message.mentions.users.size) {
      return message.reply(`BJ dene k liye koi toh chahiye na! kissi ko tag toh kr na lawde!`);
    }

    message.channel.send(`${taggedUser.username} ne ${message.author} ko eak zabardast wala blowjob diya, esko dheke mera tak khada ho gaya! MC`);
  }

  if (command === 'fuck') {
    if (!args.length) {
      return message.channel.send(`Jisko chodna hai uska naam toh likh gandu ${message.author}!`);
    }

    const taggedUser = message.mentions.users.first();

    if (!message.mentions.users.size) {
      return message.reply(`chodne k liye koi toh chahiye na! kissi ko tag toh kr lawde!`);
    }
    // message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    message.channel.send(`${message.author} ne ${taggedUser.username} ko chod dala tapa tap!!`);
  }

  console.log()



});

client.login(process.env.bottoken);