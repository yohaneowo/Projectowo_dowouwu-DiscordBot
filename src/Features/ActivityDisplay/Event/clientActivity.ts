const client = require(`${process.cwd()}/dist/app`).default
import { ActivityType } from "discord.js"

class ActivityDisplay {
    constructor(client) {
        this.client = client
    }
    
    async setActivitySettings(client) {
        client.user.setActivity(
            `with ${client.guilds.cache.reduce(
            (a, g) => a + g.members.cache.size,
            0
            )} members`,
            { type: ActivityType.Watching }
        )
    }

    async startActivityTimer() {
        setInterval(() => this.execute(), 1000 * 5 * 60)
    }
}
