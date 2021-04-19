import { Client } from "eris";
import * as CommandHandler from "./commands/CommandHandler";
import * as EventHandler from "./events/EventHandler";
export declare class Client extends Client {
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
