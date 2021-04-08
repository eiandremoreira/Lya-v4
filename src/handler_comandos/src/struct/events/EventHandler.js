"use strict";
const ClientHandler = require("../ClientHandler");
class EventHandler extends ClientHandler {
    constructor(client, path) {
        super(client, path);
    }
    set(listener) {
        super.set(listener);
        this.client.on(listener.name, listener.run.bind(listener));
        return listener;
    }
    delete(name) {
        const listener = this.get(name);
        if (!listener)
            return false;
        this.client.removeAllListeners(listener.name);
        return super.delete(listener.name);
    }
    clear() {
        for (const listener of this.keys())
            this.delete(listener);
    }
}
module.exports = EventHandler;
//# sourceMappingURL=EventHandler.js.map