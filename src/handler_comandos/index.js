"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./src/struct/Client");
const CommandStructure_1 = require("./src/struct/commands/CommandStructure");
const EventStructure_1 = require("./src/struct/events/EventStructure");
__exportStar(require("./src/struct/commands/CommandStructure"), exports);
__exportStar(require("./src/struct/Client"), exports);
__exportStar(require("./src/struct/events/EventStructure"), exports);
exports.default = {
    CommandStructure: CommandStructure_1.CommandStructure,
    EventStructure: EventStructure_1.EventStructure,
    Client: Client_1.Client
};
//# sourceMappingURL=index.js.map