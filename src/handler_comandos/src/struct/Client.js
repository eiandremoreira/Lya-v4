"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Eris = require("eris");
const CommandHandler = require("./commands/CommandHandler");
const EventHandler = require("./events/EventHandler");
class Client extends Eris.Client {
    constructor(options) {
        super(options.token, options.clientOptions);
        this.commands = new CommandHandler(this, options.commandsPath);
        this.listener = new EventHandler(this, options.eventsPath);
        this.init().catch((e) => console.log(e));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connect();
                const [commands] = yield Promise.all([this.commands.loadFiles()]);
                console.log(`Carregado ${commands} comandos.`.brightGreen);
                const [listeners] = yield Promise.all([this.listener.loadFiles()]);
                console.log(`Carregado ${listeners} eventos.`.brightGreen);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map