import { Collection } from "eris";
import { Client } from "./Client";
declare class ClientHandler extends Collection<any> {
    client: Client;
    name: string;
    dir: string;
    constructor(client: Client, name: string);
    set(piece: any): any;
    delete(key: any): boolean;
    private load;
    loadFiles(): Promise<any>;
    private walkFiles;
}
export = ClientHandler;
