const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready',()=>{
    console.log('bot je online');
    client.user.setActivity('PixelCity Roleplay',{type:'WATCHING'}).catch(console.error);
})

client.on('message',message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    if(!message.channel.name.includes('💥predlozi-za-discord')) {
        return;
    } else{
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(`Predlog \n${message.content}`)
        .setTitle(`${message.author.username} je dao predlog`)
        .setTimestamp()
        .setFooter(`${message.author.username}`)
        .setColor('#7047f5,#4005ff');
        message.channel.send(embed).then(message=> message.react('👍')).then(reaction => reaction.message.react('👎'));
       }
 })

client.login('ODI2MjA2Nzg5MDM2MDE1Njg4.YGJHCA.rcm8qFYcepYIPjhxXkCcT1pXVRc');