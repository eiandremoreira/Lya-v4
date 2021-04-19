module.exports = {
    exe: "Run by {user}!",
    slash: "<:slash:833031545022578698> Used by {user}!",
    handler: {
        cooldown: "Wait {time} second(s) to use this command again!",
        no_args: "It seems that some arguments are missing, for more information `{prefix}help {command}`!",
        no_perm: "You do not have permission `{perm}` to use this command!"
    },
    avatar: {
        txt1: "Avatar of {user}",
        txt2: "⬆️ Click to download."
    },
    lang: {
        list: "**Languages**: 🇧🇷 `pt-br`, 🇺🇸 `en-us`",
        me: {
            pt: "🇧🇷 Agora irei falar em `português-brasileiro` com você!",
            en: "🇺🇸 Now I will speak in `english` with you!"
        },
        guild: {
            pt: "🇧🇷 Agora irei falar em `português-brasileiro` no servidor!",
            en: "🇺🇸 Now I will speak in `english` in this guild!"
        }
    },
    help: {
        embed_base: `<:prefixo:795208415323488286> My current prefix on the guild **{guild}** is \`{prefix}\`\n\n**{prefix}**help \`<cmd>\` for more information about a command.\n\n<:CB_wow:832774308098342933> Add me by clicking [here](https://discord.com/api/oauth2/authorize?client_id={id}&permissions=4228377846&scope=bot)!`,
        title_commando: "Command help.",
        title_category: "Help by category.",
        title_commandos: "Command list.",
        name: "**Name**:",
        category: "**Category**:",
        description: "**Description**:",
        aliases: "**Aliases**:",
        usage: "**Usage**:",
        usages: "**Usages**:",
        args: "**Arguments**:",
        args_n: "Optional:",
        args_o: "Mandatory:",
        args_t: "Total:",
        err: {
            no_command: "❌ No commands found with name **{name}**!",
            no_desc: "No description.",
            no_alias: "No aliases.",
            no_usages: "No usages.",
            no_use: "No usage."
        }
    },
    userinfo: {
        name: "Name",
        nickname: "Nickname",
        created: "Account created on",
        joined: "It joined in the guild on",
        permissions: "Permissions",
        days: "days",
        hours: "hours",
        minutes: "minutes",
        and: "and",
        title: "{user}'s Info.",
        x: ":x: No users found!"
    },
    serverinfo: {
        name: "Name",
        members: "Members",
        region: "Region",
        verifi: "Verification",
        roles: "Roles",
        channels: "Channels",
        created: "Created on",
        joined: "I joined here on",
        verification: {
            none: "None",
            low: "Low",
            medium: "Medium",
            high: "High",
            highest: "Highest"
        }
    },
    raspadinha: {
        desc1: "Will you win some prizes?",
        desc2: "💸 Scratch Card 💸",
        msg1: ":tada: This message shows what you have won!",
        txt1: ":x: Where's the combination?\nOnly in anger will I catch 10,000 :yen: of you :rage:",
        txt2: ":tada: Congratulations {user} you win **{conta} :yen:**!",
        err: {
            err1: ":x: You need 5,000 💴 to purchase a scratch card!",
            err2: ""
        }
    },
    prefix: {
        txt: "My prefix on this guild has been changed to ",
        err: "My prefix on this guild is already "
    },
    balance: {
        desc: "Balance of {user}!",
        wallet: "💰 Wallet",
        bank: "🏦 Bank"
    },
    nitro: {
        desc: "When activating the poor nitro, every time someone who does not have nitro sends an emoji that is not from that guild or animated I will send it via webhook.",
        on: "On",
        off: "Off",
        nitro: "<a:nitro_gaming:832300506353369098> Poor Nitro",
        ativado: "<a:nitro_gaming:832300506353369098> Poor nitro activated!",
        desativado: "<a:nitro_gaming:832300506353369098> Poor nitro disabled!"
    },
    drop: {
        txt: "**Box drop**, Type pick `<box>` in chat!\nBox drops give rewards like cash (in bot ok does not come to ask for money in the lrd dm no :rage:) <:CB_wow:832774308098342933>`",
        yay: ":tada: Congratulations {user} you opened the box and received **{valor}** :yen:",
        cmd: "By activating the drop system, from time to time I will drop a box that people can pick up and receive rewards!",
    },
    calculadora: {
        txt: "🧐 **Question:**\n{q}\n\n🤓 **Result:**\n{c}",
        x: ":x: Insert a valid account!"
    },
    permissions: {
        P1: "Create instant invitations",
        P2: "Kick Members",
        P3: "Ban Members",
        P4: "Administrator",
        P5: "Manage Channels",
        P6: "Manage Guild",
        P7: "Add Reactions",
        P8: "View audit log",
        P9: "Voice Priority",
        P10: "Stream",
        P11: "View Messages",
        P12: "Send Messages",
        P13: "Manage Messages",
        P14: "Send Links",
        P15: "Attach Files",
        P16: "Read message history",
        P17: "Mention Everyone",
        P18: "External Emojis",
        P19: "View server data",
        P20: "Connect",
        P21: "Speak",
        P22: "Mute Members",
        P23: "Deafening Members",
        P24: "Move Members",
        P25: "Use VAD",
        P26: "Change Nickname",
        P27: "Manage Nicknames",
        P28: "Manage Roles",
        P29: "Manage Webhooks",
        P30: "Manage Emojis",
        P31: "Use slash commands",
        P32: "Send TTS Messages"
    }
}