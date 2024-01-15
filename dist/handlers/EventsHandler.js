"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
function EventsHandler(client, Client) {
    console.log(process.cwd());
    const featuresPath = node_path_1.default.join(process.cwd(), "dist/Features");
    node_fs_1.default.readdirSync(featuresPath).forEach((feature) => {
        const feature_EventPath = node_path_1.default.join(process.cwd(), `dist/Features/${feature}/Event`);
        if (!node_fs_1.default.existsSync(feature_EventPath))
            return;
        const eventFiles = node_fs_1.default.readdirSync(feature_EventPath).filter((file) => file.endsWith(".js"));
        for (const eventFile of eventFiles) {
            const event_Filepath = node_path_1.default.join(feature_EventPath, eventFile);
            const event = require(event_Filepath);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            }
            else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    });
}
exports.default = EventsHandler;
