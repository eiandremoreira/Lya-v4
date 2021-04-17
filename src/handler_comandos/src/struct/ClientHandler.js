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
const eris_1 = require("eris");
const path_1 = require("path");
const fs_nextra_1 = require("fs-nextra");
class ClientHandler extends eris_1.Collection {
    constructor(client, name) {
        super();
        this.client = client;
        this.name = name;
        this.dir = `${path_1.dirname(require.main.filename)}${path_1.sep}${name}`;
    }
    set(piece) {
        const exists = this.get(piece.name);
        if (exists)
            this.delete(piece.name);
        super.set(piece.name, piece);
        return piece;
    }
    delete(key) {
        const exists = this.get(key);
        if (!exists)
            return false;
        return super.delete(key);
    }
    load(file) {
        const filepath = path_1.join(this.dir, file);
        try {
            const parsedFile = {
                path: file,
                name: path_1.parse(filepath).name
            };
            const piece = this.set(new (require(filepath))(this.client, parsedFile));
            delete require.cache[filepath];
            return piece;
        }
        catch (error) {
            console.error(`Erro ao carregar: ${this.name.slice(0, -1)} (${filepath}). Erro:\n${error.stack || error}`);
            return null;
        }
    }
    loadFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clear();
            try {
                yield this.walkFiles();
            }
            catch (e) {
                console.error(e);
            }
            return this.size;
        });
    }
    walkFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            return fs_nextra_1.scan(this.dir, { filter: (stats, filepath) => stats.isFile() && path_1.extname(filepath) === ".js" })
                .then(files => Promise.all([...files.keys()].map(file => this.load(path_1.relative(this.dir, file)))))
                .catch(error => console.error(error));
        });
    }
}
module.exports = ClientHandler;
//# sourceMappingURL=ClientHandler.js.map