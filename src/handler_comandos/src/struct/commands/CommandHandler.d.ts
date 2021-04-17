import { Collection } from "eris";
import { Client } from "../Client";
import ClientHandler = require("../ClientHandler");
declare class CommandHandler extends ClientHandler {
    client: Client;
    aliases: Collection<any>;
    constructor(client: Client, path: string);
    get(name: any): any;
    has(name: string): boolean;
    set(command: any): any;
    delete(command: any): boolean;
    clear(): void;
}
export = CommandHandler;
