"use strict";
const eris_1 = require("eris");
const ClientHandler = require("../ClientHandler");
class CommandHandler extends ClientHandler {
    constructor(client, path) {
        super(client, path);
        this.client = client;
        // @ts-ignore
        this.aliases = new eris_1.Collection();
    }
    get(name) {
        return super.get(name) || this.aliases.get(name);
    }
    has(name) {
        return super.has(name) || this.aliases.has(name);
    }
    set(command) {
        super.set(command);
        if (command.aliases.length)
            for (let i = 0; i < command.aliases.length; i++)
                this.aliases.set(command.aliases[i], command);
        return command;
    }
    delete(command) {
        const exists = this.get(command);
        if (!exists)
            return false;
        if (exists.aliases.length)
            for (let i = 0; i < exists.aliases.length; i++)
                this.aliases.delete(exists.aliases[i]);
        return super.delete(command);
    }
    clear() {
        super.clear();
        this.aliases.clear();
    }
}
module.exports = CommandHandler;
//# sourceMappingURL=CommandHandler.js.map