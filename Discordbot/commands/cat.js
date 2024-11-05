const fetch = require('superagent');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'cat',
    description: 'cat',
    execute(msg, args)
    {
        fetch.get("https://some-random-api.ml/img/cat").then(x => {
            const catEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(x.body.link);
            msg.channel.send(catEmbed);
        })
    }
}