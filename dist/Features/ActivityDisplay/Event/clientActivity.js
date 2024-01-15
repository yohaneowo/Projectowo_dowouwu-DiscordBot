"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client = require(`${process.cwd()}/dist/app`).default;
const discord_js_1 = require("discord.js");
function setActivity(client) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(client + 'teste');
        client.user.setActivity(`with ${client.guilds.cache.reduce((a, g) => a + g.members.cache.size, 0)} members`, { type: discord_js_1.ActivityType.Watching });
    });
}
setInterval(() => setActivity(client), 1000);
