export declare class CommandStructure {
    client: any;
    name: string;
    aliases: Array<string>;
    category: string;
    description: string;
    subcommands: Array<Subcommands>;
    format: string | null;
    details: string | null;
    examples: Array<string> | null;
    ownerOnly: boolean;
    clientPermissions: Array<string> | null;
    userPermissions: Array<string> | null;
    nsfw: boolean;
    cooldown: number | undefined;
    enabled: boolean;
    hidden: boolean;
    supportServerOnly: boolean | undefined;
    guildOwnerOnly: boolean | undefined;
    constructor(client: any, options: CommandOptions);
    run(...args: any): void;
}
export interface CommandOptions {
    name: string;
    autoAliases?: boolean;
    aliases?: Array<string>;
    category: string;
    description: string;
    subcommands?: Array<Subcommands>;
    format?: string;
    details?: string;
    examples?: Array<string>;
    ownerOnly?: boolean;
    clientPermissions?: Array<string>;
    userPermissions?: Array<string>;
    nsfw?: boolean;
    cooldown?: number;
    enabled?: boolean;
    hidden?: boolean;
    supportServerOnly?: boolean;
    guildOwnerOnly?: boolean;
}
export interface Subcommands {
    name: string;
    description: string;
    format: string;
}
