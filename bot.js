const Discord = require('discord.js');
const { Client, RichEmbed, Emoji, MessageReaction } = require('discord.js');
const CONFIG = require('./config');
const client = new Client({ disableEveryone: true });
const ytdl = require('ytdl-core');
const fs = require('fs');
const Util = require('discord.js');
const prefix = "@"
const FFMPEG = require("ffmpeg");
const Enmap = require("enmap");
const myEnmap = new Enmap();
const adminprefix = "@";
const db = require('quick.db');
  const devs = ['357961207019470851'];
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   

const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyBPDpS-wRHLdJcxeeSqPTf7ixUUrwVp-fk");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log(`Informations About ${client.user.username}:`)
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created By: R3d Bot ⚡️|  ')
  console.log('╚[════════════]╝')
});



//=================================== Owner ===================================

client.on('message', msg => {
  if (msg.content === '@Support') {
        msg.delete(999)
    msg.reply('<@&644389536754827275>');
  }
});

const credits = require('./credits.json');
const daily = Math.floor(Math.random() * 350) + 10;   //350
const cool = [];
client.on('message',async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
 
  if(!credits[author]) credits[author] = {credits: 0}; //50
  if(!credits[mention.id]) credits[mention.id] = {credits: 0};
  fs.writeFileSync(path, JSON.stringify(credits, null, 4), function(err) {if(err) console.log(err)});

  if(message.content.startsWith(prefix + "credit")) {
      
    message.channel.startTyping()
            setTimeout(() => {
            message.channel.stopTyping()
            },3000);
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
  if(args[2]) {
    if(args[2].includes(".")) return message.channel.send("**<a:WAHT:646115266127724598> | type an correct number.**");
    if(mention.bot) return message.channel.send(`**<a:WAHT:646115266127724598> | ${'message.author.username'}, I can't find ${user}!**`);
    if(mention.id === message.author.id) return message.channel.send('**<a:WAHT:646115266127724598> WAHT?**');
    if(credits[author].credits < balance) return message.channel.send(`**<a:WAHT:646115266127724598> | ${message.author.username}, Your balance is not enough for that!**`);
    if(args[2].startsWith("-")) return  message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);
	if(args[2].startsWith(".")) return  message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);
	if(args[2].endsWith(".")) return  message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);
	if(args[2].search(".")) return message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);
	if(isNaN(args[2]) || args[2] < 0) return message.channel.send('**<a:WAHT:646115266127724598> |  type an incorrect number.**');
	if(args[2].startsWith("0")) return  message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);
	if(args[2].startsWith("${balance}.")) return  message.channel.send(`**<a:WAHT:646115266127724598> |  type an incorrect number.**`);



var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
    var number = `${one}${two}${three}${four}`;

      message.channel.send(`**\`$${balance}\` :المبلغ <a:638402968307367936:641133087505514516> .
 \`${number}\` : اكتب الرقم التالي حتي تتم عليه التحويل $**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 90000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**<a:638402968307367936:641133087505514516> | ${message.author.username}, has transferred \`$${balance}\` to ${mention}**`);
		  var mentioned = message.mentions.users.first() || message.guild.members.get(args[0]);
mentioned.send(`<a:dolar:643167542214656010> | Transfer Receipt \`\`\`You have received \$${balance}\ from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
client.channels.get("644749945173180418").send(`**
» تمت عملية التحويل«
 
 \`${message.author.id}\` : اي دي المرسل 
اسم المرسل  : \`${message.author.username}\`
 \`${mention.id}\` : ايدي المستلم    
اسم المستلم  : \`${mention.username}\`
 \`${balance}\` : المبلغ**`);  
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`**<a:no:643167563609538560> | Error **`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**<a:638402968307367936:641133087505514516> | ${message.author.username}, I can't find user!**`);
     message.channel.send(`**<a:dolar:643167542214656010> | ${mention.username}, blance is: \`\`$${credits[mention.id].credits}\`\`.**`);
  }
 
   }
        if(args[0].toLowerCase() === `${prefix}daily`) {  
     
        if(credits[message.author.id].daily != moment().format('L')) {
 
       credits[message.author.id].daily = moment().format('L');
           
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
          credits[author].credits += ammount;
       
       
          message.channel.send(`**<a:dolar:643167542214656010> | ${message.author.username}, you received your <a:638402968307367936:641133087505514516> ${ammount} daily credits!**`);
		  client.channels.get("644750156368969728").send(`**
» تمت عليه تسليم الراتب «
 \`${mention.id}\` : ايدي المستلم    
اسم المستلم  : \`${mention.username}\`
 \`${ammount}\` : المبلغ**`);
        fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
            if (e) throw e;
        })
 
      }else{
      message.channel.send(`<:nitro:646114322392678430> : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
      }
   
        }
         
   
 
});









const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://laaa3d.glitch.me/`);
}, 280000);







client.on('message', message => {
  if(message.content.startsWith(prefix + 'bc')) {
  let args = message.content.split(" ").slice(1).join(" ");
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**- No Permissions 🙄**`)
  if(!args) return message.channel.send(`**:rolling_eyes: Please Type The Broadcast Message**`)
  let filter = m => m.author.id == message.author.id
  let broadcastt = new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[0] to cansel**`,`** **`)
  message.channel.send(broadcastt).then(msg => {
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ['time']
  })
  .then(collected => {
    if(collected.first().content === '1') {
      message.channel.bulkDelete(1)
  message.channel.send(`**Broadcast begin send to \`${message.guild.members.size}\` members....**`);
  msg.delete()
     return message.guild.members.forEach(m => {
  m.send(args.replace('[user]', m))
      })
  }
  if(collected.first().content === '2') {
    msg.delete()
    message.channel.bulkDelete(1)
    message.channel.send(`**Broadcast begin send to \`${message.guild.members.filter(m=>m.presence.status == 'online').size}\` members....**`);
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(args.replace('[user]', m))
  })
  message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
    m.send(args.replace('[user]', m))
  })
  return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {
    m.send(args.replace('[user]', m))
  })
    }
  if(collected.first().content === '0') {
    message.channel.bulkDelete(1)
    msg.delete()
    return message.channel.send(`**Broadcast Has Been Canseled <a:yes:643167563487903764> **`);
  }})})}
  });

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('#36393e')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("643391431645593600").send({embed:iiMo});
    }
});


let warning = JSON.parse(fs.readFileSync('./warning.json' , 'utf8'));
client.on('message',message=>{
if(message.author.bot || message.channel.type == "dm"||!message.channel.guild) return;
let prefix = '@';
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if(command == 'warn'){if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let T = warning[message.guild.id].warns;
let user = message.mentions.users.first();if(!user)return message.channel.send(`**<a:619776668772466688:641077578471571457> I can't find this member**`)
let reason = message.content.split(" ").slice(2).join(" ");if(!reason) return message.channel.send(`**<a:619776668772466688:641077578471571457> Please specify a reason.**`)
let W = warning[message.guild.id].warns;
let ID = 0;let leng = 0;
W.forEach(w =>{ID++;
if(w.id !== undefined) leng++;
})
if(leng === 90) return message.channel.send(`**<a:no:643167563609538560> You Can't Give More than \`90\` Warns**, please reset the warn list.`)
T.push({user:user.id,by:message.author.id,reason:reason,time:moment(Date.now()).format('llll'),id:ID+1})
message.channel.send(`**<a:yes:643167563487903764> @${user.username} warned!**`);
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
user.send(new Discord.RichEmbed().addField('**You were warned!<a:yes:643167563487903764>**',reason)
.setFooter(message.guild.name,message.guild.iconURL).setTimestamp().setColor('#0x36393e '));return;}
if(command == 'warnings') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let count = 0;let page = message.content.split(" ")[1];if(!page || isNaN(page)) page = 1;if(page > 4) return message.channel.send('**Warnings are only recorded on 4 pages!**')
let embed = new Discord.RichEmbed().setFooter(message.author.username,message.author.avatarURL)
let W = warning[message.guild.id].warns;
W.forEach(w =>{if(!w.id) return;count++;
if(page == 1) {if(count > 24) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`<a:627160961660485664:640970784646496278> ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 24) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 2`);
}if(page == 2) {if(count <= 24) return null;if(count > 45) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`<a:627160961660485664:640970784646496278> ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 45) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 3`);
}if(page == 3) {if(count <= 45) return null;if(count > 69) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`<a:627160961660485664:640970784646496278> ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 69) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 4`);
}if(page == 4) {if(count <= 69) return null;if(count > 92) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`<a:627160961660485664:640970784646496278> ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 64) embed.addField('**FULL**',`** **`);}});
embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`)
message.channel.send(embed)};
if(command == 'removewarn' || command == 'rm') {
if(!message.member.hasPermission('MANAGE_GUILD')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]};
let args = message.content.split(" ")[1];if(!args) return message.channel.send(
`**<a:619776668772466688:641077578471571457> Please specify warning number or user mention or (all) to delete all warnings.**`);
let user = message.mentions.members.first();
if(user) {
let C = 0;let a = warning[message.guild.id].warns
a.forEach(w=>{
if(w.user !== user.id) return
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
C++;
})
if(C === 0) return message.channel.send(`**<a:619776668772466688:641077578471571457> I can't find the warning that you're looking for.**`)
return message.channel.send('** '+C+' warnings has been removed.<a:yes:643167563487903764>**');
};
if(args == 'all') {
let c = 0;let W = warning[message.guild.id].warns;	
W.forEach(w =>{if(w.id !== undefined) c++;})
warning[message.guild.id] = {warns:[]};
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
return message.channel.send('** '+c+' warnings has been removed.<a:yes:643167563487903764>**')
}if(isNaN(args)) return message.channel.send(
	`**<a:619776668772466688:641077578471571457> Please specify warning number or user mention or (all) to delete all warnings.**`); 
let W = warning[message.guild.id].warns;
let find = false;
W.forEach(w =>{
if(w.id == args) {
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
find = true;return message.channel.send('** 1 warnings has been removed.<a:yes:643167563487903764>**')
}});if(find == false) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)}});

client.on('message', message => {
 
 var ms = require('ms')
 
 var moment = require('moment');
 
 if (message.author.bot) return;
 
 if (!message.content.startsWith(prefix)) return;
 
 let command = message.content.split(" ")[0];
 
 command = command.slice(prefix.length);
 
 let args = message.content.split(" ").slice(1);
 
 let messageArray = message.content.split(" ");
 
 let embed = new Discord.RichEmbed()
 
.setImage("https://5.top4top.net/p_1413zs58m1.png")
 
 if (command == "ban") {
 
 if(!message.channel.guild) return message.reply('**<a:619776668772466688:641077578471571457> This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**<a:no:643167563609538560>,You Don't Have ` BAN_MEMBERS ` Permission**");
 
 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**<a:no:643167563609538560>,I Don't Have ` BAN_MEMBERS ` Permission**");
 
 let user = message.mentions.users.first();
 
 let Reason = message.content.split(" ").slice(3).join(" ");
 
 let time = messageArray[2];
 
 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
 
 if (!message.guild.member(user).bannable) return message.reply("**<a:no:643167563609538560>,I Don't Have Permission For Ban This User**");
 
 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send('<a:619776668772466688:641077578471571457>,This Time Is Incorrect')
 
 if(!Reason)  {
 
 message.guild.member(user).ban({reason: Reason})
 
 }
 
  if(!Reason && time) {
 
  message.guild.member(user).ban(7, user);
 
  }  
 
  if(!time) {
 
  message.guild.member(user).ban(7, user);
 
  }
  if(time) {
 
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  if(time && Reason && user) {
 
  message.guild.member(user).ban({reason: Reason})
     
     
  setTimeout(() => {
 
  message.guild.unban(user);
 
  }, ms(time));
 
  }
 
  message.channel.send(`<a:yes:643167563487903764> ** ${user.tag} Banned from the Server ! :airplane:**`)
 
  }
 
  });
 
 
client.on('message', message => {
 
  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
   
  let embed = new Discord.RichEmbed()
 
 .setImage("https://1.top4top.net/p_1413qv45a1.png")
 
  if (command == "mute") {
   
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
 
  if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**<a:no:643167563609538560> You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**<a:no:643167563609538560> I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**<a:no:643167563609538560>I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send('<a:no:643167563609538560>This Time Is Incorrect')
 
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
       
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`<a:yes:643167563487903764> ${user} has been muted ! <a:yes:643167563487903764>`)
 
   }
 
});



client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });



let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | ban limit : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457> | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457> | Number ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | kick limit : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457> | Number ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | role delete limit : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | role create limit : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457> | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | channel delete limit : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            if (isNaN(num)) return message.channel.send("**<a:619776668772466688:641077578471571457>  | Number ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**<a:619776668772466688:641077578471571457> | time limits : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username} User is Trying to Sabotage Server **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username} User is Trying to Sabotage Server **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username}  User is Trying to Sabotage Server **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username} User is Trying to Sabotage Server **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username} User is Trying to Sabotage Server **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**<a:627160961660485664:640970784646496278> ${entry.username} User is Trying to Sabotage Server **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})




const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g=> !members[g.id] ? members[g.id] = {} : null)
});

client.on("guildMemberRemove", member=>{
  let roles = [];
  member.roles.forEach(r=> roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member=> {
  if(members[member.guild.id][member.id] !== undefined){
    member.addRoles(members[member.guild.id][member.id], "Returning roles after leaving");
    members[member.guild.id][member.id] = [];
  };
  saveChanges();
});
function saveChanges(){
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
};






const sug = JSON.parse(fs.readFileSync('./sug.json', 'utf8'));
// ?  , ?
client.on('message', message => {
    if (!message.channel.guild) return;
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find(x => x.name === `${room}`)
    if (message.content.startsWith(prefix + "setSug")) {
        if (!message.channel.guild) return;
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** | Don\'t have perms.<a:no:643167563609538560>**`);
        if (!room) return message.channel.send(`** | Please type the channel name.<a:no:643167563609538560>**`)
        if (!findroom) return message.channel.send(`** | Can\'t found this channel.<a:no:643167563609538560>**`)
        let embed = new Discord.RichEmbed()
            .addField(` Channel:`, ` \`${room}\`.`)
            .addField(` Requested By:`, ` \`${message.author}\``)
            .setThumbnail(message.author.avatarURL)
            .setFooter(`${client.user.username}`)
        message.channel.sendEmbed(embed)
        sug[message.guild.id] = {
            channel: room,
        }
        fs.writeFile("./sug.json", JSON.stringify(sug), (err) => {
            if (err) console.error(err)
        })
        client.on('message', message => {
            // ?  , ?
            if (message.content.startsWith('sug')) {
                if (!message.channel.guild) return;
                let suggest = message.content.split(" ").slice(1);
                if (!suggest) return message.reply(`** |<a:ticekt:644395632265527306> Please type the suggest.**`)
                let findchannel = (message.guild.channels.find(x => x.name === `${sug[message.guild.id].channel}`))
                if (!findchannel) return message.channel.send(`**  | Error: \`Can\'t find the suggestions room.<a:no:643167563609538560>**`)
                message.channel.send(`**| Thanks for your suggest.**`)
                let sugembed = new Discord.RichEmbed()
                    .setTitle(' New suggest:')
                    .addField(' Suggest By:', `? \`${message.author}\``)
                    .addField(' Suggest:', ` \`${suggest}\``)
                    .setFooter(client.user.username)
                findchannel.sendEmbed(sugembed)
                    .then(function (message) {
                        message.react('<a:yes:643167563487903764>')
                        message.react('<a:no:643167563609538560>')
                    })
                    .catch(err => {
                        message.reply(`**  | Error: \`Can\'t find the suggestions room.<a:no:643167563609538560>**`)
                        console.error(err);
                    });
            }
        })
    }
})




let antijoin = JSON.parse(fs.readFileSync('./antijoin.json' , 'utf8'));
/*íÍÊÇÌ ÊÚÑÝ ÈßÌ const fs = require('fs')
ØÈÚÇ áæ ãæ ãÚÑÝ ÇáÈßÌ ^
+ ÊËÈÊ ÇáÈßÌ npm i fs
*/
client.on('message', message => {
    if(message.content.startsWith(prefix + "antijoin on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**<a:no:643167563609538560>**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`<a:no:643167563609538560>`' );
antijoin[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`** The AntiJoin Is Off <a:yes:643167563487903764>!**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antijoin off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**<a:no:643167563609538560>');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`<a:no:643167563609538560>' );
antijoin[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`** The AntiJoin Is On <a:yes:643167563487903764>!**`)
          fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
            if (err) return console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
         client.on('message', message => {
          if (!message.channel.guild) return;
 
 
   if(message.content.startsWith(prefix + "setJoin")) {
          let time = message.content.split(" ").slice(1).join(" ");
       if(!message.channel.guild) return message.reply('**This Command Only For Servers**<a:no:643167563609538560>');
       if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`<a:no:643167563609538560>' );
if (!time) return message.channel.send('**Please Type The Account Created Time [Days]**');
let embed = new Discord.RichEmbed()
.setTitle('**Done The AntiJoin Code Has Been Setup,<a:yes:643167563487903764>**')
.addField('Account Create Time:', `${time}.<a:619776668772466688:641077578471571457>`)
.addField('Requested By:', `${message.author}<a:627160961660485664:640970784646496278>`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
.setColor("#0x36393e")
message.channel.sendEmbed(embed)
antijoin[message.guild.id] = {
created: time,
onoff: 'On',
}
fs.writeFile("./antijoin.json", JSON.stringify(antijoin), (err) => {
if (err) console.error(err)
})
   }})
 
client.on("guildMemberAdd", async member => {
  if(!antijoin[member.guild.id]) antijoin[member.guild.id] = {
    onoff: 'Off'
  }
  if(antijoin[member.guild.id].onoff === 'Off') return;
  if(!member.user.bot) return;
    let accounttime = `${antijoin[member.guild.id].created}`
    let moment2 = require('moment-duration-format'),
        moment = require("moment"),
        date = moment.duration(new Date() - member.user.createdAt).format("d");
 
    if(date < accounttime) {
      member.ban(`Member account age is lower than ${antijoin[member.guild.id].created} days.`)
    }
  });




 
client.on('message', message => {
    if (message.content === ('@help')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#0x36393e')
            .addField('**⊃ Public  <a:discord:644400912801988619>** ' , '**@public**' )
            .addField('**⊃ Admin   <a:Wait:644988331720966145> **', '**@admin**' )
            .addField('**⊃ Music <a:remix:643167556408049672> & Giveaway <a:giveaway:643167563265736740> **' , '**@music**')
            .addField('**⊃ Config <a:lid:643167534173913089> **' , '**@config**')
            .addField('**⊃ Ticket <a:ticekt:644395632265527306>**' ,  '**@ticket**')
            .addField('**Bot Owner**👑 :' ,  '[<@357961207019470851>]')
            .addField('**Bot Website**✨ :' ,  'https://psychoweb.glitch.me/')
            .setFooter(message.author.username, message.author.avatarURL)
    })
} 
});
 

client.on('message', message => {
  if (message.content === prefix + "id") {
  var year = message.createdAt.getFullYear()
  var month = message.createdAt.getMonth()
  var day = message.createdAt.getDate()
       let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField("**Your Name:**", `${message.author.username}`)
    .setThumbnail(message.author.avatarURL)
    .addField('Your Tag:', message.author.discriminator,true)
    .addField("**Day :**", message.author.createdAt.getDate())
    .addField("**Year :**", message.author.createdAt.getFullYear())
    .addField("**Month:**", message.author.createdAt.getMonth())
    .setFooter(`By 💀- Mà ,Psycho✨`, 'https://cdn.discordapp.com/avatars/357961207019470851/7483cc663835bf03b2874ccb01629960.png?size=2048')
    .setTimestamp()
       .setColor('#0x36393e')
    message.channel.send({embed}).then(message => {
      message.react("560200705990721566") });
      }
  });

client.on('message', message => {
 if (message.content === "@config") {
      message.react("a:yes:643167563487903764")
message.reply("**Check Your `DM` <a:yes:643167563487903764>**")

  const embed = new Discord.RichEmbed()
      .setColor("#0x36393e")
      .setDescription(`
        ** يشمل البوت اشياء كثيرة ومنها مانع التهكير - لـ تفعيل مانع التهكير ارفع رتبة البوت فوق كل رتب الادارة **
       
 __**اوامر الحمايه <a:lid:643167534173913089>**__
  ❖${prefix}**settings limitsban ** ==>**تحديد حد البان**
  ❖${prefix}**settings limitskick ** ==>**تحديد حد الكيك**
  ❖${prefix}**settings limitsroleD ** ==>**تحديد حد مسح الرتب**
  ❖${prefix}**settings limitsroleC ** ==>**تحديد حد انشأء الرتب**
  ❖${prefix}**settings limitschannelD ** ==>**تحديد حد مس الرومات**
  ❖${prefix}**settings limitstime ** ==>**تحديد حد الوقت**
  ❖${prefix}**antispread on/off ** ==>**تشغيل او اطفأ مانع النشر**
  ❖${prefix}**setSug ** ==>**تحديد روم الاقتراحات**
  ❖${prefix}**antibots on/off ** ==>**لمنع البوتات من دخول السيرفر**
  ❖${prefix}**setJoin ** ==>**مانع الوهمي**
  ❖${prefix}**antiJoin on/off** ==>**مانع دخول الناس السيرفر**
  ❖${prefix}**setlog ** ==>**تعين الوج**

By : <@357961207019470851> | __**شكرا لكم لاستعمال البوت**__
 
 
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
 if (message.content === "@admin") {
 message.react("a:yes:643167563487903764")
   message.reply("**Check Your `DM` <a:yes:643167563487903764>**")

     
  const embed = new Discord.RichEmbed()
      .setColor("#0x36393e")
      .setDescription(`
 **لتفعيل اللوق انشئ روم اسمه log**
        ** يشمل البوت اشياء كثيرة ومنها مانع التهكير - لـ تفعيل مانع التهكير ارفع رتبة البوت فوق كل رتب الادارة **
     
 __**الاوامر الادارية <a:Wait:644988331720966145>**__
  ❖${prefix}**ct ** ==>**لانشاء روم  كتابي**
  ❖${prefix}**unban ** ==>**فك البان**
  ❖${prefix}**cv ** ==>**لانشاء روم صوتي **
  ❖${prefix}**warn ** ==>**تحذير شخص**
  ❖${prefix}**rm ** ==>** ازاله التحذيرات**
  ❖${prefix}**kick ** ==>**لطرد شخص من السيرفر**
  ❖${prefix}**ban ** ==>**لحظر شخص من السيرفر**
  ❖${prefix}**mute ** ==>**لاسكات عضو في السيرفر**
  ❖${prefix}**unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
  ❖${prefix}**clear ** ==>**لمسح كل رسائل الشات**
  ❖${prefix}**mc** ==>**لقفل الروم عن الاعضاء**
  ❖${prefix}**unmc** ==>**لفتح الروم ع الاعضاء**
  ❖${prefix}**unban all/User ID** ==>**فك البان عن شخص او الكل**
  ❖${prefix}**hide ** ==>**اخفاء كل الرومات**
  ❖${prefix}**unhide ** ==>**اظهار كل الرومات**
  ❖${prefix}**banslist ** ==>**اظهار عدد الناس المتبندين**

 
By : <@357961207019470851> | __**شكرا لكم لاستعمال البوت**__
 
 
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
 if (message.content === "@public") {
     message.react("a:yes:643167563487903764")
message.reply("**Check Your `DM` <a:yes:643167563487903764>**")
   
  const embed = new Discord.RichEmbed()
      .setColor("#0x36393e")
      .setDescription(`
        __**الاوامر العامة <a:discord:644400912801988619>**__
  ❖${prefix}**avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
  ❖${prefix}**emoji** ==>**جلب اي اموجي بي الاي دي**
  ❖${prefix}**server ** ==>**لمعلومات السيرفر**
  ❖${prefix}**id ** ==>**لمعلومات عنك** 
  ❖${prefix}**bot ** ==>**معلومات عن البوت**
  ❖${prefix}**credits ** ==>**كود كيريدت**
  ❖${prefix}**daily** ==>**الجأزه اليوميه**
  ❖${prefix}**report ** ==>**لابلاغ عن شخص**
  ❖${prefix}**icon ** ==>**اظهار صوره السيرفر**

 
By : <@357961207019470851> | __**شكرا لكم لاستعمال البوت**__
 
 
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
 if (message.content === "@music") {
  message.react("a:yes:643167563487903764")
message.reply("**Check Your `DM`<a:yes:643167563487903764>**")
     
  const embed = new Discord.RichEmbed()
      .setColor("#0x36393e")
      .setDescription(`
       __**Giveaway <a:giveaway:643167563265736740> Music <a:music:643167540314374194> **__  
  ❖${prefix}**play ** ==>**تشغيل الاغنيه او الموسيقى**
  ❖${prefix}**pause ** ==>**لتوقيف الاغنيه**
  ❖${prefix}**resume ** ==>**لاكمال الاغنيه**
  ❖${prefix}**skip ** ==>**لاختصار الاغنيه الحاليه**
  ❖${prefix}**queue ** ==>**لمعرفه قأمه الاغاني**
  ❖${prefix}**np ** ==>**لمعرفه الاغنيه الحاليه**
  ❖${prefix}**lyrics [ly]  ** ==>**لمعرفه كلمات الاغنيه**
  ❖${prefix}**gstart ** ==> **لبدء مسابقه او جيف اواي**
 
 
By : <@357961207019470851> | __**شكرا لكم لاستعمال البوت**__
 
 
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
 if (message.content === "@ticket") {
  message.react("a:yes:643167563487903764")
message.reply("**Check Your `DM` <a:yes:643167563487903764>**")
     
  const embed = new Discord.RichEmbed()
      .setColor("#0x36393e")
      .setDescription(`
            **     لتفعيل الامر تحتاج رتبه Support **
       __**Ticket Commands <a:ticekt:644395632265527306>**__
  ❖${prefix}**new ** ==>**لعمل تيكت جديده**
  ❖${prefix}**close ** ==> **لاغلاق التيكت**
  ❖${prefix}**confirm ** ==>**لتأكيد اغلاق التيكت**
 
 
By : <@357961207019470851> | __**شكرا لكم لاستعمال البوت**__
 
 
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on("message", message => {
   
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**No Permissions <a:no:643167563609538560>**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "The Room chat has been Cleard <a:yes:643167563487903764>!",
        color: 0x36393e,
        description: "",
        footer: {
          text: "Psycho"
        }
      }}).then(msg => {msg.delete(3000)});
                          }
 
     
});

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "@unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' <a:no:643167563609538560> **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'mute-log','loh');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted'<a:no:643167563609538560>  **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً <a:619776668772466688:641077578471571457>**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت/احكي')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**<a:yes:643167563487903764> .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**<a:yes:643167563487903764> .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });

let spread = JSON.parse(fs.readFileSync('./spread.json' , 'utf8'));


client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers <a:no:643167563609538560>**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`<a:no:643167563609538560>' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**AntiSpread Off <a:627160961660485664:640970784646496278>**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antispread on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers <a:no:643167563609538560>**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD` <a:no:643167563609538560>' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**AntiSpread On <a:yes:643167563487903764>**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }

        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.gmail.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});

    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});

    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});


    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('www.')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'

            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }

});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }

});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**<a:no:643167563609538560>**`)
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("@cv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("**You Don't Have `MANAGE_CHANNELS` Premissions <a:627160961660485664:640970784646496278>**");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('**The Room is Successfully Created <a:yes:643167563487903764>**')
        
    }
    });

client.on("message", (message) => {
    if (message.content.startsWith("@ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions <a:627160961660485664:640970784646496278>");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('The Room is Successfully Created <a:yes:643167563487903764>')
    
    }
    });

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**<a:619776668772466688:641077578471571457> Mention The User Please**");
  if(!reason) return message.reply ("**<a:619776668772466688:641077578471571457> Write The Reason Please**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I cant Kick User Because He Has Role Higer Than Man <a:no:643167563609538560>**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("#0x36393e")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**:face_with_symbols_over_mouth:')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**<a:619776668772466688:641077578471571457>')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**<a:627160961660485664:640970784646496278>')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {

    if (message.content === "@server") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()

.addField('***SERVER OWNER👑***: ' , message.guild.owner)
.addField('***SERVER NAME💳***: ' , message.guild.name)
.addField('***SERVER ID🆔***:' , message.guild.id)
.addField('***SERVER VERIFICATIONLEVEL❓***: ' , message.guild.verificationLevel)
.addField('***SERVER REGION:globe_with_meridians: ***: ' , message.guild.region)
.addField('***DEFAULT CHANNEL1⃣ ***: ' , message.guild.defaultChannel)
.addField('***CHANNELS SIZE🔋***: ' , message.guild.channels.size)
.addField('***ROLES🔢***: ' , message.guild.roles.size)
.addField('***MEMBERS📡***: ' , message.guild.memberCount)
.addField('**SERVER CREATED IN🕑***: ' ,year + "-"+ month +"-"+ day)
.setColor("#0x36393e")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});


client.on('message', message => {
    if (message.content === ('@bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#0x36393e')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .addField('**Bot Owner**👑 :' , `[<@357961207019470851>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
   })
}
});

client.on('message', message => {
 
  if(message.content === prefix + "mc") {
                      if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false
 
         }).then(() => {
             message.reply("**Chat Closed !,<a:yes:643167563487903764> **")
         });
           }
//tex BOT
if(message.content === prefix + "unmc") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true
 
         }).then(() => {
             message.reply("**Chat Opend !,<a:yes:643167563487903764>**")
         });
           }
           
   
 
});

  client.on('message', message => {
    if(message.content == '@allservers') {
             if(!message.author.id === '357961207019470851') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('#0x36393e')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
           
            `);
          message.channel.sendEmbed(serv);
    })
    }
    });

  client.on('message', message=>{
    if (message.content ===  "@leave"){
        if(!message.author.id === '357961207019470851') return;
    message.guild.leave();
            }
});

client.antibots = new Enmap({name: "antibot"});
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
if(codes.content.startsWith(prefix + "antibots on")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: 'On'
});
 
 
codes.channel.send("**AntiBots Join Is On**,<a:yes:643167563487903764>");
}
if(codes.content.startsWith(prefix + "antibots off")){
if(codes.author.bot || !codes.channel.guild || codes.author.id != codes.guild.ownerID) return;
antibots.set(`${codes.guild.id}`, {
onoff: "Off"
});
codes.channel.send("**AntiBots Join Is Off**,<a:627160961660485664:640970784646496278>");
}
});
 
julian.on("guildMemberAdd", member => {
if(!antibots.get(`${member.guild.id}`)) { antibots.set(`${member.guild.id}`, {
onoff: "Off"
});
}
if(antibots.get(`${member.guild.id}`).onoff == "Off") return;
if(member.user.bot) return member.kick()
});

       //Isi yang bener atau bot bisa ga work

client.on('message', message => {
    if (message.content.startsWith("@avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#0x36393e")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});



client.on("message", msg =>{    
if(msg.content.startsWith(`${prefix}topservers`)){

      if (!devs.includes(msg.author.id)) return msg.channel.send(`** | You Can't Use this Command.**`);
     
 let noTop = msg.content.split(" ")[1];
 const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
 if(!noTop) noTop = 10; //she3a
 if(isNaN(noTop)) noTop = 10;
 if(noTop <= 0) noTop = 10;
 if(noTop > top.length) noTop = top.length;
 let serveremmbed = new Discord.RichEmbed();
 for(let i = 0; i < noTop; i++){
 serveremmbed.addField(`\n **⇏ ${top[i].name}** \n Members » ${top[i].memberCount}`," ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎");
 }
 serveremmbed.setTitle(`\n **Top ${noTop} Servers** \n`);
 serveremmbed.setThumbnail(msg.author.displayAvatarURL);
 serveremmbed.setTimestamp();
 serveremmbed.setColor('#0x36393e')
 serveremmbed.setFooter(client.user.username,client.user.displayAvatarURL);
 msg.channel.send(serveremmbed);
}});//she

client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**<a:yes:643167563487903764>, Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all,<a:619776668772466688:641077578471571457>**');
  message.guild.unban(args).then(m =>{message.channel.send(`**<a:yes:643167563487903764>, Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**<a:619776668772466688:641077578471571457> - I can't find \`${args}\` in the ban list**`)});
  }});

client.on('ready', function(){
    var ms = 3500 ;
    var setGame = ['@help','By Psycho','Beta Test'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/aligamer889`);
    }, ms);
  console.log('---------------');
  console.log('Psycho Is Online')
  console.log('---------------')
});

client.on("message", message => {

              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "icon"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('#x36393e')
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', function(message) {
 // هنا البريفكس
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ للعقوبة")
message.channel.send(Rembed)
message.channel.send("**Are you sure you want to send this to the Server owner?,**<a:619776668772466688:641077578471571457>").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! <a:yes:643167563487903764>**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on("message", message => {  //by she3a
  if(message.content.startsWith(prefix + "emoji")) { //by she3a
      if(message.author.bot) return; //she3a
      var emojiid =  message.content.split(" ").slice(1).join(" ") //by she3a
      console.log(emojiid) //by she3a
      if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage
${prefix}emoji <EmojiID>`); //by she3a
      else    //شيعا القمد
      message.channel.send("This is the emoji that you requested:-",
        { //by she3a
          files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
        }) //by she3a
      }  //by she3a
}) //by she3a
 
client.on('message', message=>{
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**You Need Permission 🙄**");
    let log = message.guild.channels.find("name", "log")
    if(log) return message.reply("**Channel Already Exists <a:619776668772466688:641077578471571457>**") 
    if(!log) { 
    message.guild.createChannel("log", "text").then(c=> {
        c.overwritePermissions(message.guild.id, {
             VIEW_CHANNEL: false
           
    })
})
message.channel.send("**Channel Successfully Created <a:yes:643167563487903764>**")
    }
    }
     })

/////////
 
client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor.username

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} اخــذ مــيــوت صــوتــي بــواســطــه  ${newM} `)
.setColor('#000000')
        .setTimestamp()
       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user} فــك عــنــه  مــيــوت صــوتــي بــواســطــه  ${newM} `)
.setColor('#000000')
       .setTimestamp()
       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  اخــذ ديــفــن صــوتــي بــواســطــه   ${newM}`)
.setColor('#000000')
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(` ${user}  فــك عــنــه ديــفــن صــوتــي بــواســطــه   ${newM}`)
.setColor('#000000')
       .setTimestamp()

       ch.send(embed)
    }
  })
})


  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
 
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setTitle(' تــعــديــل رســالــه  :  ')
.addField('قــبــل الــتــعــديــل',`${message.cleanContent}`)
.addField(' بــعــد  الــتــعــديــل ',`${newMessage.cleanContent}`)
.addField(' عــدلــت فــي  ',`<#${message.channel.id}>`)
.addField(' يــواســطــه  ', `<@${message.author.id}> `)
.setColor('#000000')
       .setTimestamp();
     channel.send({embed:embed});
 
 
});
 
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  انــضــم لــلــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
   
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setColor('#36393e')
       .setDescription(` <@${member.user.id}>  خــرج مــن الــســيــرفــر `)
       .setTimestamp();
     channel.send({embed:embed});
});
 
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
   
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setTitle('  مــســح رســالــه  :   ')
 .addField('  الــرســالــه  ',`${message.cleanContent}`)
 .addField('  مــســحــت فــي  ',`<#${message.channel.id}>`)
 .addField(' بــواســطــه  ', `<@${message.author.id}> `)
       .setColor('#36393e')
       .setTimestamp();
     channel.send({embed:embed});
 
});

     
      client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#36393e')          
            .setTitle('-  مــســح رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})


client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('+  انــشــاء رتــبــه ')
            .addField(' اســم الــرتــبــه  ', role.name, true)
            .addField(' هــويــة الــرتــبــه ', role.id, true)
            .addField(' لــون الــرتــبــه ', role.hexColor, true)
            .addField(' بــواســطــه ', exec, true)
            .setColor('#36393e') 
            .setTimestamp()
            
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("حــظــر عــضــو :  ")
        .setColor('#36393e') 
        .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});



    client.on("guildBanRemove", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor("  فــك حــظــر عــن عــضــو ")
        .setColor('#36393e') 
		 .setThumbnail(myUser.avatarURL)
        .addField(' الــعــضــو  ',`**${myUser.username}**`,true)
        .addField('  بــواســطــه ',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

client.on('message', msg => {
  if(msg.content === '@hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('**تم اخفاء الرومات من الاعضاء** <a:yes:643167563487903764>')
  }
})


client.on('message', msg => {
  if(msg.content === '@unhide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('**تم اظهار الرومات كلها للاعضاء**<a:yes:643167563487903764> ')
  }
})


client.on('message', message => {
    if (message.content.startsWith("@banslist")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`** Banned Users ** **__${bans.size}__** `))
}
});

 client.on("message", message => {
                var args = message.content.split(' ').slice(1);
                var msg = message.content.toLowerCase();
                if( !message.guild ) return;
                if( !msg.startsWith( prefix + 'role' ) ) return;
                if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
                if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
                    if( !args[0] ) return message.reply( '**<a:no:643167563609538560> يرجى وضع الشخص المراد سحب منه الرتبة**' );
                    if( !args[1] ) return message.reply( '**<a:no:643167563609538560> يرجى وضع الرتبة المراد سحبها من الشخص**' );
                    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
                    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
                    if( !role1 ) return message.reply( '**<a:no:643167563609538560> يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
                        message.mentions.members.first().removeRole( role1 );
                        return message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
                    }
                    if( args[0].toLowerCase() == "all" ){
                        message.guild.members.forEach(m=>m.removeRole( role1 ))
                        return  message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] تم سحب من الكل رتبة**');
                    } else if( args[0].toLowerCase() == "bots" ){
                        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
                        return  message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] تم سحب من البوتات رتبة**');
                    } else if( args[0].toLowerCase() == "humans" ){
                        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
                        return  message.reply('**<a:yes:643167563487903764>[ '+role1.name+' ] تم سحب من البشريين رتبة**');
                    }
                } else {
                    if( !args[0] ) return message.reply( '**<a:no:643167563609538560> يرجى وضع الشخص المراد اعطائها الرتبة**' );
                    if( !args[1] ) return message.reply( '**<a:no:643167563609538560>​ يرجى وضع الرتبة المراد اعطائها للشخص**' );
                    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
                    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
                    if( !role1 ) return message.reply( '**<a:no:643167563609538560> يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
                        message.mentions.members.first().addRole( role1 );
                        return message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
                    }
                    if( args[0].toLowerCase() == "all" ){
                        message.guild.members.forEach(m=>m.addRole( role1 ))
                        return  message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] تم اعطاء الكل رتبة**');
                    } else if( args[0].toLowerCase() == "bots" ){
                        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
                        return  message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
                    } else if( args[0].toLowerCase() == "humans" ){
                        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
                        return  message.reply('**<a:yes:643167563487903764> [ '+role1.name+' ] تم إعطاء الشخص رتبة**');
                    }
                }
            });








client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Support Psycho |${prefix}new`);
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `mention`)){
     message.delete(999)

    message.channel.send(`<@&643176058631225400>`).then(m => {
    m.edit(`<@&643176058631225400>`);
    });

}
  

  
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support")) return message.channel.send(`This server doesn't have a \`Support\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
 let embed1 = new Discord.RichEmbed()
        
.setTitle('Psycho Ticket System')
.setDescription('Your ticket has been created, #${c.name}.<a:yes:643167563487903764>')
 .setColor('#0x36393e')
.setFooter(`${message.author.username}`, message.author.displayAvatarURL);
message.channel.send({ embed: embed1 })
          const embed = new Discord.RichEmbed()
        .setColor('#0x36393e')
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`**You can't use the close command outside of a ticket channel.**<a:no:643167563609538560>`);

    message.channel.send(`**Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`@confirm\`. This will time out in 10 seconds and be cancelled.**`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '@confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.<a:no:643167563609538560>').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});


    client.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')){
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You Dont Have ` ADMINISTRATOR` Permission <a:no:643167563609538560>');

            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") { 
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You Dont Have ` ADMINISTRATOR` Permission <a:no:643167563609538560>');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor('#0x36393e')
    message.channel.sendEmbed(say);
    message.delete();
  }


});



 client.on('message',async message => {
    const moment = require('moment'); //npm i moment
const ms = require('ms') //npm i ms//Bot Prefix !
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send('<a:no:643167563609538560>| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`<a:error:643167533016285205>| **Send Name channel For the Giveaway**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send('<a:no:643167563609538560>| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('<a:error:643167533016285205>| **Time For The Giveaway**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**The Bot Not Support This Time,<a:no:643167563609538560>**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('<a:error:643167533016285205>| **Now send The Present **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' <a:yes:643167563487903764> **Giveaway Created** <a:yes:643167563487903764>' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !<a:giveaway:643167563265736740>',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** <a:giveaway:643167563265736740> GIVEAWAY ENDED <a:giveaway:643167563265736740>**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` , {embed: {}})
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`<a:no:643167563609538560>| **i Don't Have Prem**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});





client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });


const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
if(message.author.bot || !message.guild)return
if(!message.member) return
if(!message.member.hasPermission('MANAGE_GUILD'))return;
if(message.content.startsWith(prefix+'blacklist add')){
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
if(!user)return message.channel.send('**Please Mention the User Or Type His ID <a:no:643167563609538560>**')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
if (!message.guild.member(user).bannable) return message.channel.send(`<a:no:643167563609538560> I couldn't ban that user. Please check my permissions and role position.`)
user.ban('blacklist by'+message.author.tag+'!')
if(blacklist[message.guild.id+user.id]) return message.channel.send('**This Member Allready Blacklisted!**')
blacklist[message.guild.id+user.id] = {};
message.channel.send(`**Added ${user} to The Blacklist <a:yes:643167563487903764>**`)
}if(message.content.startsWith(prefix+'blacklist remove')){
let user =  message.content.split(" ")[2]
if(!user)return message.channel.send('**Please Type His ID <a:no:643167563609538560>**')
if(!blacklist[message.guild.id+user]) return message.channel.send('**I Can\'t Find This member In The Blacklist!**\nplease Check the Member ID')
delete blacklist[message.guild.id+user];message.guild.unban(user).catch(err=>{
  return message.channel.send(`<a:no:643167563609538560>** I couldn't unban that user.`)
})
message.channel.send(`**Removed <@${user}> from The Blacklist <a:yes:643167563487903764>**`)}
if(message == prefix+'blacklist list'){
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[message.guild.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});let MS = blacklistss.join("\n")
message.channel.send(new Discord.RichEmbed().setAuthor(message.guild.name,message.guild.iconURL)
.setTitle('**⛔ This This The Blacklist:**')
.setDescription(`${MS}`).setColor('RED').setFooter(message.author.username,message.author.avatarURL)
)
};
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})})
client.on('guildMemberAdd',member=>{if(blacklist[member.guild.id+member.id])return member.ban('blacklist')})

client.on('message', message => {
    if (message.content === ('@send')) {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You Dont Have ` ADMINISTRATOR` Permission <a:619776668772466688:641077578471571457>');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('#0x36393e')
            .addField('** كود التيكت** ','@help <a:ticekt:644395632265527306>' )

    })
} 
});

var bot = new Discord.Client();

const config1 = require("./config1.json");

var load = require("./src/load");
load(bot, config1);

var track = require("./src/track");
track(bot, config1);

bot.login(require("./token.json"))
	.then(() => {
		console.log(`Logged in as ${bot.user.tag}`);
	})
	.catch(error => {
		console.error(error);
	});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "email") {
function randomem() {
let email = '';
const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
for (let i = 0; i < 5; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
return email;
}
function randompass() {
let pass = '';
const CoDeS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 8; i++) pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
return pass;
}
const random1 = randomem();
const random2 = randompass();
message.author.send(`P.P.------------------------P.P.
Email : **${random1}@gmail.com**
Password : **${random2}**
P.P.------------------------P.P.`).catch(err => {
   if(err == "DiscordAPIError: Cannot send messages to this user") {
      return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
}
});

message.channel.send("**تم الارسال الحساب في الخاص | <a:yes:643167563487903764> **")
}});


const ms = 180000; //3 minutes
const watchdogjson = JSON.parse(fs.readFileSync('./watchdog.json' , 'utf8'));
const watchdogonoff = JSON.parse(fs.readFileSync('./watchdogonoff.json' , 'utf8'));

client.on('message', message => {
    if (!message.channel.guild) return;
let room = message.content.split(" ").slice(1);
let findroom = message.guild.channels.find('name', `${room}`)
if(message.content.startsWith(prefix + "setwatchdog")) {
    if(!message.channel.guild) return message.reply('**<a:no:643167563609538560> | This Command Only For Servers**');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:no:643167563609538560> | Sorry But You Dont Have Permission** `MANAGE_GUILD`');
    if(!room) return message.channel.send('<a:no:643167563609538560> | Please Type The Channel Name')
    if(!findroom) return message.channel.send('<a:no:643167563609538560> | I Cant Find This Channel')
    message.channel.send(`**<a:yes:643167563487903764> | Done Successfully , __Watchdog Turned On And Set The Log__**`)
    watchdogonoff[message.guild.id] = {
        onoff: 'on',
    channel: room,
    },
    fs.writeFile("./watchdogonoff.json", JSON.stringify(watchdogonoff), (err) => {
    if (err) console.error(err)
    
    })
  }})

  client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content.startsWith(prefix + "watchdog off")) {
    if(!message.channel.guild) return message.reply('**<a:no:643167563609538560> | This Command Only For Servers**');
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('** <a:no:643167563609538560> | Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
    message.channel.send(`<a:yes:643167563487903764> | Done Successfully , __Watchdog Turned Off__`)
    watchdogonoff[message.guild.id] = {
        onoff: 'off',
    channel: 'undefiend',
    },
    fs.writeFile("./watchdogonoff.json", JSON.stringify(watchdogonoff), (err) => {
    if (err) console.error(err)
    
    })
  }})


client.on('guildMemberRemove' , r => {
      if(!watchdogonoff[r.guild.id]) watchdogonoff[r.guild.id] = {
        onoff: "off",
        channel: "undefined"
    }
      if(watchdogonoff[r.guild.id].onoff == 'Off') return;
    let muterole = r.roles.find('name', 'Muted');
if(!muterole) return;
watchdogjson[r.guild.id] = {
member: r.username
}
setTimeout(() => {
    watchdogjson[r.guild.id] = {}
}, ms)
fs.writeFile("./watchdog.json", JSON.stringify(watchdogjson), (err) => {
    if (err) console.error(err)
    })
     fs.writeFile("./watchdogonoff.json", JSON.stringify(watchdogonoff), (err) => {
        if (err) console.error(err)
        })
      });


  client.on('guildMemberAdd' , a => {
        if(!watchdogonoff[a.guild.id]) watchdogonoff[a.guild.id] = {
           onoff: "off",
           channel: "undefined"
       }
       if(watchdogonoff[a.guild.id].onoff == 'Off') return;
      let logchannel = a.guild.channels.find('name', `${watchdogonoff[a.guild.id].channel}`)
    if(!logchannel) return;
 if(watchdogjson[a.guild.id].member === a.username) {
logchannel.send(`**• Watch Dog: ! , ${a} had left and join again to delete the mute role of him.**`)
   }
   fs.writeFile("./watchdog.json", JSON.stringify(watchdogjson), (err) => {
    if (err) console.error(err)
    })
    fs.writeFile("./watchdogonoff.json", JSON.stringify(watchdogonoff), (err) => {
        if (err) console.error(err)
        })

});


const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
   if(!rWlc[message.guild.id]) rWlc[message.guild.id] = {
    role: "member"
  }
const channel = rWlc[message.guild.id].role
  if (message.content.startsWith(prefix + "autorole")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newrole = message.content.split(' ').slice(1).join(" ")
    if(!newrole) return message.reply(`**${prefix}autorole <role name>**`)
    rWlc[message.guild.id].role = newrole
    message.channel.send(`**${message.guild.name}'s role has been changed to ${newrole}**`);
  }
fs.writeFile("./AutoRole.json", JSON.stringify(rWlc), function(e){
    if (e) throw e;
})
});
client.on("guildMemberAdd", member => {
      if(!rWlc[member.guild.id]) rWlc[member.guild.id] = {
    role: "member"
  }
    const sRole = rWlc[member.guild.id].role
    let Rrole = member.guild.roles.find('name', sRole);
  member.addRole(Rrole);
 
      });

client.on("message", msg => {
    if(msg.content.startsWith(prefix + "infoAutoRole")){
    var sRole = rWlc[msg.guild.id].role
let emb = new Discord.RichEmbed()
.setTitle("**AutoRole Info**")
.setAuthor(msg.guild.name,msg.guild.iconURL)
.setThumbnail(msg.guild.iconURL)
.setColor("#0x36393e")
.addField("**Server ID**", msg.guild.id)
.addField("**Server Name**", msg.guild.name)
.addField("**Role Name**", sRole)
.setFooter(client.user.tag,client.user.avatarURL)
msg.channel.send(emb)
    }
});




const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| اكتب اسم الروم الان... :pencil2: **').then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   } 
            )
        })
    })
})
    })
}})
    
client.on('message', message => {
           if (!message.channel.guild) return;

    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setWelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off',
leave: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
    

            client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleLeave")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
            onoff: 'Off',
          leave: 'Off'
        }
          if(welcome[message.guild.id].leave === 'Off') return [message.channel.send(`**The Leave Msg Is __𝐎𝐍__ !**`), welcome[message.guild.id].leave = 'On']
          if(welcome[message.guild.id].leave === 'On') return [message.channel.send(`**The Leave Msg Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].leave = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })
client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleWelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __𝐎𝐍__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })
        

        
        client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleDmwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })

        client.on('message', message => {
  
            if(message.content.startsWith(prefix + "toggleInvitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __𝐎𝐍__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                  
                })
      client.on("guildMemberRemove", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off',
          leave: 'Off'
        }
        
        if(welcome[member.guild.id].onoff === 'Off') return;
                if(welcome[member.guild.id].leave === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].leavechannel}`)
    if(!welcomer) return;
     welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
      })          

client.on("guildMemberAdd", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
        if(welcome[member.guild.id].onoff === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
     fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
        if (err) console.error(err)
        .catch(err => {
          console.error(err);
      });
        })
      }})



client.on('guildMemberAdd',async member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
    if(welcome[member.guild.id].onoff === 'Off') return;
    const Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['./welcome.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
   
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);
   
  })
   
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);
   
            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);
           
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`Your The Member ${member.guild.memberCount}`, 580, 200);
           
            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 36, 21, 260, 260);
             
            let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
            if(!c) return;
            c.sendFile(canvas.toBuffer());
            fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                if (err) console.error(err)
                .catch(err => {
                  console.error(err);
              });
                })
   
  });
  });
  });

  const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  by: 'Off'
                }
    if(welcome[member.guild.id].by === 'Off') return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
    if(!logChannel) return;
      setTimeout(() => {
    logChannel.send(`Invited By: <@${inviter.id}>`);
  },2000)
  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    });
  });
});

client.on("guildMemberAdd", member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  dm: 'Off'
                }
        if(welcome[member.guild.id].dm === 'Off') return;
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
    .catch(err => {
      console.error(err);
  });
    })
})




// ------------ = [Welcome - Leave - Invite By] = ------------ //

const welcome1 = JSON.parse(fs.readFileSync('./welcome-json/welcomer.json' , 'utf8'));
client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    message.channel.send(':pencil: **| من فضلك اكتب الرساله الان... :pencil2: **').then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| اكتب اسم الروم الان... :pencil2: **').then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| تم الاعداد بنجاح...  **').then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcome-json/welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   } 
            )
        })
    })
})
    })
}})
    

  client.on('message', message => {

if(message.content.startsWith(prefix + 'perms')) {
  var msg = message.content.toLowerCase();
var role2 = msg.split(' ').slice(1).join(" ").toLowerCase(); 
var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
 if(role1.hasPermissions('ADMINISTRATOR')) {
 var permadmin = "<a:yes:643037581222739978>"
 } else {
 var permadmin="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('VIEW_AUDIT_LOG')) {
 var permlog = "<a:yes:643037581222739978>"
 } else {
 var permlog="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MANAGE_GUILD')) {
 var permserver = "<a:yes:643037581222739978>"
 } else {
 var permserver="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MANAGE_ROLES')) {
 var permroles = "<a:yes:643037581222739978>"
 } else {
 var permroles="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MANAGE_CHANNELS')) {
 var permchannel = "<a:yes:643037581222739978>"
 } else {
 var permchannel="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('KICK_MEMBERS')) {
 var permkick = "<a:yes:643037581222739978>"
 } else {
 var permkick="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('BAN_MEMBERS')) {
 var permban = "<a:yes:643037581222739978>"
 } else {
 var permban="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('CREATE_INSTANT_INVITE')) {
 var perminvites = "<a:yes:643037581222739978>"
 } else {
 var perminvites="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('CHANGE_NICKNAME')) {
 var permnick = "<a:yes:643037581222739978>"
 } else {
 var permnick="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MANAGE_NICKNAMES')) {
 var permmanagenick = "<a:yes:643037581222739978>"
 } else {
 var permmanagenick="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('MANAGE_EMOJIS')) {
 var permemojis = "<a:yes:643037581222739978>"
 } else {
 var permemojis="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('MANAGE_WEBHOOKS')) {
 var permhook = "<a:yes:643037581222739978>"
 } else {
 var permhook="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('SEND_MESSAGES')) {
 var permmessage = "<a:yes:643037581222739978>"
 } else {
 var permmessage="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('SEND_TTS_MESSAGES')) {
 var permtts = "<a:yes:643037581222739978>"
 } else {
 var permtts="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('MANAGE_MESSAGES')) {
 var permmanagemessages = "<a:yes:643037581222739978>"
 } else {
 var permmanagemessages="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('EMBED_LINKS')) {
 var permembed = "<a:yes:643037581222739978>"
 } else {
 var permembed="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('ATTACH_FILES')) {
 var permattach = "<a:yes:643037581222739978>"
 } else {
 var permattach="<a:no:643037582296612864>"
 }
   if(role1.hasPermissions('MENTION_EVERYONE')) {
 var permmention = "<a:yes:643037581222739978>"
 } else {
 var permmention="<a:no:643037582296612864>"
 }
if(role1.hasPermissions('USE_EXTERNAL_EMOJIS')) {
 var permuseemojis = "<a:yes:643037581222739978>"
 } else {
 var permuseemojis="<a:no:643037582296612864>"
 }
if(role1.hasPermissions('ADD_REACTIONS')) {
 var permreact = "<a:yes:643037581222739978>"
 } else {
 var permreact="<a:no:643037582296612864>"
 }
if(role1.hasPermissions('CONNECT')) {
 var permconnect = "<a:yes:643037581222739978>"
 } else {
 var permconnect="<a:no:643037582296612864>"
 }
if(role1.hasPermissions('SPEAK')) {
 var permspeak = "<a:yes:643037581222739978>"
 } else {
 var permspeak="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MUTE_MEMBERS')) {
 var permmute = "<a:yes:643037581222739978>"
 } else {
 var permmute="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('DEAFEN_MEMBERS')) {
 var permdeafen = "<a:yes:643037581222739978>"
 } else {
 var permdeafen="<a:no:643037582296612864>"
 }
  if(role1.hasPermissions('MOVE_MEMBERS')) {
 var permmove = "<a:yes:643037581222739978>"
 } else {
 var permmove="<a:no:643037582296612864>"
 }
 let nat = new Discord.RichEmbed()
 .addField('ADMINISTRATOR',permadmin, true)
 .addField('VIEW_AUDIT_LOG',permlog, true)
 .addField('MANAGE_SERVER',permserver, true)
 .addField('MANAGE_ROLES',permroles, true)
 .addField('MANAGE_CHANNELS',permchannel, true)
 .addField('KICK_MEMBERS',permkick, true)
 .addField('BAN_MEMBERS',permban, true)
 .addField('CREATE_INSTANT_INVITE',perminvites, true)
 .addField('CHANGE_NICKNAME',permnick, true)
 .addField('MANAGE_NICKNAMES',permmanagenick, true)
 .addField('MANAGE_EMOJIS',permemojis, true)
 .addField('MANAGE_WEBHOOKS',permhook, true)
 .addField('SEND_MESSAGES',permmessage, true)
 .addField('SEND_TTS_MESSAGES',permtts, true)
 .addField('MANAGE_MESSAGES',permmanagemessages, true)
 .addField('EMBED_LINKS',permembed, true)
 .addField('ATTACH_FILES',permattach, true)
 .addField('MENTION_EVERYONE',permmention, true)
 .addField('USE_EXTERNAL_EMOJIS',permuseemojis, true)
 .addField('ADD_REACTIONS',permreact, true)
 .addField('CONNECT',permconnect, true)
 .addField('SPEAK',permspeak, true)
 .addField('MUTE_MEMBERS',permmute, true)
 .addField('DEAFEN_MEMBERS',permdeafen, true)
 .addField('MOVE_MEMBERS',permmove, true)
 message.channel.send(nat)
}
  });







//--------------------------------
  client.on('message', message => {
if(message.content.startsWith (prefix  + 'mb')) {
if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setColor('black')
  .setDescription(`**:battery: حالة اعضاء السيرفر**
   
  **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
  **:yellow_heart: Idle**   **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
  **:heart: DND** **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
  **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
   
  message.channel.send()
   
  message.channel.sendEmbed(embed)
  }
  });


client.on('message', message =>{
  if(message.content.startsWith(prefix + 'add')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});

client.login("NjQ1NDgyODk0NzkzMzc1NzU1.XdDO2w.AURuWhiBiI4j77oyaaMmpOrlpTk");


