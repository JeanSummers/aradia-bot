import { Composer, log, session } from "micro-bot";


export default class App {
    bot: Composer;

    constructor(bot: Composer) {
        this.bot = bot;

        bot.use(log())
        bot.use(session())

        bot.start(({ reply }) => reply('Welcome message'))
        bot.help(({ reply }) => reply('Help message'))
        bot.settings(({ reply }) => reply('Bot settings'))
        bot.hears("ping", ({ reply }) => reply("pong"))
        bot.hears("Привет", ({ reply, from }) => reply('Здравствуйте, ' + from.first_name))

        bot.command('date', ({ reply }) => reply(`Server time: ${new Date()}`))
        bot.command('reverseName', ({ reply, from }) => reply(from.first_name.split('').reverse().join('')))
    }

}