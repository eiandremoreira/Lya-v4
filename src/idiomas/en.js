module.exports = {
    exe: "Run by {user}!",
    slash: "<:slash:833031545022578698> Used by {user}!",
    mention: "<:tl1FlowerBlue:817920797913251850> » Hello {user}! My current prefix on this server is ** {prefix}**, use `{prefix}help` to see my {commands} commands!",
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
        name: "Name",
        category: "Category",
        description: "Description",
        aliases: "Aliases**:",
        usage: "Usage",
        examples: "Examples",
        args: "Arguments",
        args_n: "Optional:",
        args_o: "Mandatory:",
        args_r: "Roles:",
        args_m: "Mentions:",
        args_c: "Common:",
        args_t: "Total:",
        err: {
            no_command: "❌ No commands found with name **{name}**!",
            no_desc: "No description.",
            no_alias: "No aliases.",
            no_examples: "No examples.",
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
        },
        regiao: {
            eu: "Europe",
            br: "Brazil",
            in: "India",
            sf: "South Africa",
            sg: "Singapore",
            ru: "Russia",
            jp: "Japan",
            hk: "Hong Kong",
            us: "United States"
          }
    },
    raspadinha: {
        desc1: "Will you win some prizes?",
        desc2: "💸 Scratch Card 💸",
        msg1: ":tada: This message shows what you have won!",
        txt1: ":x: Where's the combination?\nOnly in anger will I catch 10,000 :yen: of you :rage:",
        txt2: ":tada: Congratulations {user} you win **{conta} :yen:**!",
        err: {
            err1: ":x: You need 2,500 💴 to purchase a scratch card!",
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
    rolldice: {
        x: ":x: Insert a valid number for the bet!",
        x2: ":x: Enter a value from 1 to 12!",
        x3: ":x: You can't bet with yourself!",
        x4: ":x: You need to enter a number for the bet!",
        x5: ":x: You don't have all that money to bet!",
        x6: ":x: {User} doesn't have all that money to bet with you!",
        txt: "Would you like to bet a value of **{quantia} :yen:**!\nWrite `Yes <number from 1 to 12>` in the chat to accept the bet!",
        win: "🎲 I rolled the dices!\n\nValue of the first dice: **{dado1}**\nSecond dice value: **{dado2}**\nTotal: **{total}**\n\nThe closest value was {winner}, being him **{value}**"
    },
    daily: {
        txt: "Congratulations you took your daily prize and received **{quantia}** :yen:\nCome back tomorrow to receive your prize again <a:yay:832444773407260692>",
        x: "<:malFubukiSTOP:831987216300376074> What is the least wait there in the moral beauty?\n**Time remaining for the next daily:** \`{h}\`, \`{m}\`, \`{s}\`"
    },
    leaderboard: {
        loading: "Running leaderboard...",
        title: "Top Riches (Global)",
        footer: "Your position in the ranking is #"
    },
    depositar: {
        txt: "✅ It was deposited **{quantia}** :yen:, successfully in your bank!",
        x: ":x: You don't even have money in your wallet to deposit.",
        x1: ":x: Invalid amount!",
        x2: ":x: You don't have all that money in your wallet!"
    },
    sacar: {
        txt: "✅ It was withdrawn **{quantia}** :yen:, successfully from your bank!",
        x: ":x: You don't even have money in the bank to deposit.",
        x1: ":x: Invalid amount!",
        x2: ":x: You don't have all that money in the bank!"
    },
    pagar: {
        x: ":x: You don't have all that money in your wallet or bank!",
        txt: "✅ You paid **{quantia}**, for {user}!"
    },
    anime: {
        fields: [
            "✅ Rating",
            "🏆 Rank",
            "💓 Popularity",
            "⭐ Favorites",
            "💁 Status",
            "🤔 Display type",
            "📺 Episodes",
            "⏲️ Duration of episodes",
            "📆 Created",
            "📆 Ended",
            "⚠️ Age rating"
        ],
        errs: [
            "Date not identified",
            "Anime on Display",
            "Unidentified time",
            "Unidentified favorites"
        ],
        texts: [
            "On display",
            "Finished",
            "Not Released",
            "Close to launch",
            "No information"
        ],
        restrict: [
            "Suggested parental guidance",
            "General Audience",
            "Explicit Content",
            "Restricted"
        ]
    },
    aniversario: {
        txt: "✅ Who was born on `{data}`, have **{input}** years!",
        err: ":x: Invalid date format!\n**Correct format**: `<day>`/`<month>`/`<year>`"
    },
    ocr: {
        err: ":x: Invalid image URL!!"
    },
    addemoji: {
        err: [
            ":x: Invalid emoji!",
            ":x: Use link only https://imgur.com/ and https://discord.com/!"
        ]
    },
    level: {
        status: [
            "✅ Level system activated!",
            "✅ Level system off!",
            "✅ Level Up messages will now be sent in **{canal}**!"
        ],
        txt: "ℹ️ The current level of {user} on the server guild **{level}**!\n🌐 Global level: **{level2}**",
        err: ":x: You are not allowed to configure the level system!",
        err2: ":x: Invalid channel!",
        up: "🆙 Congratulations {user}, you have risen to the level **{level}**!"
    },
    botinfo: {
        title: "<a:tlPaiNom:813102166885138484> My informations",
        e: "and",
        txt: "Hello {user}! My name in this guild is **{client.name}**, i have **15** years old.\n\n> I currently have **{commands}** commands, i am currently in **{servers}** guild, with **{users}** users!\n\n> I was created in <:javascript:813113701091377162>[JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) using <:eris:836351428226056232>[Eris](https://abal.moe/Eris/).\n> To view mt command list use `{prefix}help`.\n\nDid you know they do **{uptime}** that I'm awake?"
    },
    akiantor: {
        question: "Question",
        end: "Game ended!",
        warn: ":x: You're already playing!\n:warning: Write `stop` in the chat, to end game!",
        winner: {
            title: "Hahahahha, I won again!",
            desc: ":heart: I love to play with you!"
        },
        loser: {
            title: "I've lost :(",
            desc: "You are really good!"
        }
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