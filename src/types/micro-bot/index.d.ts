declare module 'micro-bot' {

    import Telegraf, { ContextMessageUpdate, TOptions } from "telegraf";

    export class Composer extends Telegraf<ContextMessageUpdate>  {
        Stage: any
        Scene: any
        WizardScene: any

        options: TOptions;

        constructor();

        [key: string]: any;
    }

    export const log: Function;
    export const session: Function;
}