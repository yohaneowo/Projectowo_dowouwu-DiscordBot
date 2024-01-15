import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


const handlers = ["EventsHandler"]
handlers.forEach(handler => {
    import(`./handlers/${handler}`).then((modules) => {
        modules.default(client, Client);
    }).catch((err) => {
        console.log(err);
    });
});
const token = process.env.DISCORD_PRODUCTION_TOKEN;
client.login(token);

export default client;