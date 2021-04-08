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
        throw new Error(`Event ${this.constructor.name} is missing the run method.`);
    }
}
exports.EventStructure = EventStructure;
//# sourceMappingURL=EventStructure.js.map