"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventStructure = void 0;
class EventStructure {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.enabled = options.enabled || true;
    }
    run(...args) {
        if (this.enabled) {
            this.run(...args);
        }
        throw new Error(`Evento ${this.constructor.name} está faltando o metodo run.`);
    }
}
exports.EventStructure = EventStructure;