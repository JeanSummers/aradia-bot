import App from "./App";
import { Composer } from "micro-bot";
import Proxy from "proxy-agent";

const bot = new Composer();

if (process.env.BOT_PROXY) {
    const proxy: any = new Proxy(process.env.BOT_PROXY);
    console.log('Using proxy', proxy.proxyUri);

    if (!bot.options) 
        bot.options = {};
    if (!bot.options.telegram) 
        bot.options.telegram = {} as any;
    
    bot.options = {
        telegram: { agent: proxy }
    } as any;
}

const app = new App(bot);

export = app.bot;