"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandStructure = void 0;
class CommandStructure {
    constructor(client, options) {
        this.client = client;
        this.name = options.name;
        this.aliases = options.aliases || [];
        if (typeof options.autoAliases === 'undefined' || options.autoAliases) {
            if (this.name.includes('-'))
                this.aliases.push(this.name.replace(/-/g, ''));
            for (const alias of this.aliases) {
                if (alias.includes('-'))
                    this.aliases.push(alias.replace(/-/g, ''));
            }
        }
        this.usage = options.usage;
        this.usages = options.usages;
        this.category = options.category;
        this.description = options.description;
        this.args = options.args;
        this.subcommands = options.subcommands || [];
        this.format = options.format || null;
        this.details = options.details || null;
        this.examples = options.examples || null;
        this.ownerOnly = options.ownerOnly || false;
        this.clientPermissions = options.clientPermissions || null;
        this.userPermissions = options.userPermissions || null;
        this.nsfw = options.nsfw || false;
        this.cooldown = options.cooldown;
        this.enabled = options.enabled || true;
        this.hidden = options.hidden || false;
        this.supportServerOnly = options.supportServerOnly || false;
        this.guildOwnerOnly = options.guildOwnerOnly || false;
    }
    run(...args) {
        if (this.enabled) {
            this.run(...args);
        }
        throw new Error(`Command ${this.constructor.name} is missing the run method.`);
    }
}
exports.CommandStructure = CommandStructure;
//# sourceMappingURL=CommandStructure.js.map