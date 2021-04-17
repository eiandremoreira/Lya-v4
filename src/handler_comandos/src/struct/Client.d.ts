import Eris = require("eris");
import CommandHandler = require("./commands/CommandHandler");
import EventHandler = require("./events/EventHandler");
export declare class Client extends Eris.Client {
    commands: CommandHandler;
    listener: EventHandler;
    constructor(options: Options);
    private init;
}
export interface Options {
    token: string;
    eventsPath: string;
    commandsPath?: string;
    clientOptions?: Eris.ClientOptions;
}
