import fs from "node:fs"
import path from "node:path"


export default function EventsHandler(client:any, Client:any) {
    console.log(process.cwd())
    const featuresPath: string = path.join(process.cwd(), "dist/Features")
    fs.readdirSync(featuresPath).forEach((feature) => {
        const feature_EventPath =  path.join(process.cwd(), `dist/Features/${feature}/Event`)
        if(!fs.existsSync(feature_EventPath)) return;
        const eventFiles = fs.readdirSync(feature_EventPath).filter((file) => file.endsWith(".js"))
        for(const eventFile of eventFiles){
            const event_Filepath: string = path.join(feature_EventPath, eventFile)
            const event = require(event_Filepath)
            if (event.once) {
            client.once(event.name, (...args:any[]) => event.execute(...args, client))
            } else {
            client.on(event.name, (...args:any[]) => event.execute(...args, client))
            }
        }
    })
    
}