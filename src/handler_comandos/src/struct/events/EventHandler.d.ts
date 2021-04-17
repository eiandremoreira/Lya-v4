import { Client } from "../Client";
import ClientHandler = require("../ClientHandler");
declare class EventHandler extends ClientHandler {
    constructor(client: Client, path: string);
    set(listener: any): object;
    delete(name: any): boolean;
    clear(): void;
}
export = EventHandler;
