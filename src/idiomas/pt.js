module.exports = {
    exe: "Executado por {user}!",
    slash: "<:slash:833031545022578698> Utilizado por {user}!",
    mention: "<:tl1FlowerBlue:817920797913251850> » Olá {user}! Meu prefixo atual neste servidor é **{prefix}**, use `{prefix}help` para ver minha lista de {commands} comandos!",
    handler: {
        cooldown: "Espere {time} segundo(s) para usar esse comando novamente!",
        no_args: "Parece que está faltando alguns argumentos, para mais informações `{prefix}ajuda {command}`!",
        no_perm: "Você não tem a permissão `{perm}` para usar este comando!"
    },
    avatar: {
        txt1: "Avatar de {user}",
        txt2: "⬆️ Clique para baixar."
    },
    lang: {
        list: "**Idiomas**: 🇧🇷 `pt-br`, 🇺🇸 `en-us`",
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
        embed_base: `<:prefixo:795208415323488286> Meu prefixo atual no servidor **{guild}** é \`{prefix}\`\n\n**{prefix}**ajuda \`<cmd>\` para mais informações sobre algum comando.\n\n<:CB_wow:832774308098342933> Me adicione clicando [aqui](https://discord.com/api/oauth2/authorize?client_id={id}&permissions=4228377846&scope=bot)!`,
        title_commando: "Ajuda de comando.",
        title_category: "Ajuda por categoria.",
        title_commandos: "Lista de comandos.",
        name: "Nome",
        category: "Categoria",
        description: "Descrição",
        aliases: "Sinônimos",
        usage: "Uso",
        examples: "Exemplos",
        args: "Argumentos",
        args_n: "Opcionais:",
        args_o: "Obrigatórios:",
        args_r: "Cargos:",
        args_m: "Menções:",
        args_c: "Comum:",
        args_t: "Total:",
        err: {
            no_command: "❌ Nenhum comando encontrado com o nome **{name}**!",
            no_desc: "Sem descrição.",
            no_alias: "Sem sinônimos.",
            no_examples: "Sem usos.",
            no_use: "Sem uso."
        }
    },
    userinfo: {
        name: "Nome",
        nickname: "Apelido",
        created: "Conta criada em",
        joined: "Entrou no servidor em",
        permissions: "Permissões",
        days: "dias",
        hours: "horas",
        minutes: "minutos",
        and: "e",
        title: "Informações de {user}.",
        x: ":x: Nenhum usuário encontrado!"
    },
    serverinfo: {
        name: "Nome",
        members: "Membros",
        region: "Região",
        verifi: "Verificação",
        roles: "Cargos",
        channels: "Canais",
        created: "Criado em",
        joined: "Entrei aqui em",
        verification: {
            none: "Nenhuma",
            low: "Pequeno",
            medium: "Médio",
            high: "Alto",
            highest: "Muito Alto"
        },
        regiao: {
            eu: "Europa",
            br: "Brasil",
            in: "Índia",
            sf: "África do Sul",
            sg: "Cingapura",
            ru: "Rússia",
            jp: "Japão",
            hk: "Hong Kong",
            us: "Estados Unidos"
          }
    },
    raspadinha: {
        desc1: "Será que você vai ganhar alguns premiôs?",
        desc2: "💸 Raspadinha 💸",
        msg1: ":tada: Essa mensagem mostra o que você ganhou!",
        txt1: ":x: Cade a combinação?\nSó de raiva vou pegar 10,000 :yen: de você :rage:",
        txt2: ":tada: Parabéns {user} você ganhou **{conta} :yen:**!",
        err: {
            err1: ":x: Você precisa de 2,500 💴!",
            err2: ""
        }
    },
    prefix: {
        txt: "Meu prefixo neste servidor foi alterado para ",
        err: "Meu prefixo neste servidor já é "
    },
    balance: {
        desc: "Saldo de {user}!",
        wallet: "💰 Carteira",
        bank: "🏦 Banco"
    },
    nitro: {
        desc: "Ao ativar o nitro pobre, toda vez que alguém que não tiver nitro mandar um emoji que não é desse servidor ou animado eu irei manda-lo via webhook.",
        on: "Ativado",
        off: "Desativado",
        nitro: "<a:nitro_gaming:832300506353369098> Nitro Pobre",
        ativado: "<a:nitro_gaming:832300506353369098> Nitro pobre ativado!",
        desativado: "<a:nitro_gaming:832300506353369098> Nitro pobre desativado!"
    },
    drop: {
        txt: "**Drop de caixa**, Escreva pick `<caixa>` no chat!\nDrops de caixas dão recompensas como dinheiro (no bot ok não vem pedir money na dm do lrd não :rage:) <:CB_wow:832774308098342933>`",
        yay: ":tada: Parabéns {user} você abriu a caixa e recebeu **{valor}** :yen:",
        cmd: "Ativando o sistema de drop, de vez em quando eu irei dropar uma caixa que as pessoas poderão pegar e receber recompensas!"
    },
    calculadora: {
        txt: "🧐 **Questão:**\n{q}\n\n🤓 **Resposta:**\n{c}",
        x: ":x: Insirá uma conta válida!"
    },
    rolldice: {
        x: ":x: Insirá um número válido para a aposta!",
        x2: ":x: Insirá um valor de 1 à 12!",
        x3: ":x: Você não pode apostar com você mesmo!",
        x4: ":x: Você precisa informar um número para a aposta!",
        x5: ":x: Você não tem tudo isso de dinheiro para apostar!",
        x6: ":x: O(a) {user} não tem tudo isso de dinheiro para apostar com você!",
        txt: "Deseja apostar com você um valor de **{quantia} :yen:**!\nEscreva `Sim <número de 1 à 12>` no chat para aceitar a aposta!",
        win: "🎲 Lançei os dados!\n\nValor do primeiro dado: **{dado1}**\nValor do segundo dado: **{dado2}**\nTotal: **{total}**\n\nO valor mais proximo foi de {winner}, sendo ele **{value}**"
    },
    daily: {
        txt: "Parabéns você pegou seu prêmio diário e recebeu **{quantia}** :yen:\nVolte amanhã para receber seu prêmio novamente <a:yay:832444773407260692>",
        x: "<:malFubukiSTOP:831987216300376074> Qual é meno espera ai na moralzinha beleuza?\n**Tempo restante para o próximo daily:** \`{h}\`, \`{m}\`, \`{s}\`"
    },
    leaderboard: {
        loading: "Executando leaderboard...",
        title: "Top ricos (Global)",
        footer: "Sua posição no ranking é #"
    },
    depositar: {
        txt: "✅ Foi depositado **{quantia}** :yen:, com sucesso em seu banco!",
        x: ":x: Você nem tem dinheiro na carteira para depositar.",
        x1: ":x: Quantia inválida!",
        x2: ":x: Você não tem tudo isso de dinheiro na carteira!"
    },
    sacar: {
        txt: "✅ Foi sacado **{quantia}** :yen:, com sucesso do seu banco!",
        x: ":x: Você nem tem dinheiro no banco para depositar.",
        x1: ":x: Quantia inválida!",
        x2: ":x: Você não tem tudo isso de dinheiro no banco!"
    },
    pagar: {
        x: ":x: Você não tem tudo isso de dinheiro na carteira ou no banco!",
        txt: "✅ Você pagou **{quantia}**, para {user}!"
    },
    anime: {
        loading: "",
        fields: [
            "✅ Avaliação",
            "🏆 Rank",
            "💓 Popularidade",
            "⭐ Favoritos",
            "💁 Status",
            "🤔 Tipo de exibição",
            "📺 Episódios",
            "⏲️ Duração dos episódios",
            "📆 Estreou",
            "📆 Terminou",
            "⚠️ Classificação de idade"
        ],
        errs: [
            "Data não identificada",
            "Anime em Exibição",
            "Tempo não identificado",
            "Favoritos não identificados"
        ],
        texts: [
            "Em Exibição",
            "Finalizado",
            "Não Lançado",
            "Próximo do lançamento",
            "Sem informação"
        ],
        restrict: [
            "Orientação parental sugerida",
            "Audiência Geral",
            "Conteúdo Explícito",
            "Restrito"
        ]
    },
    aniversario: {
        txt: "✅ Quem nasceu em `{data}`, tem **{input}** anos!",
        err: ":x: Formato de data inválido!\n**Formato correto**: `<dia>`/`<mês>`/`<ano>`"
    },
    ocr: {
        err: ":x: URL de imagem inválida!"
    },
    addemoji: {
        err: [
            ":x: Emoji inválido!",
            ":x: Utilize link apenas de https://imgur.com/ e https://discord.com/!"
        ]
    },
    level: {
        status: [
            "✅ Sistema de level ativado!",
            "✅ Sistema de level desativado!",
            "✅ Agora as mensagens de level Up serão enviadas em **{canal}**!"
        ],
        txt: "ℹ️ O nível atual de **{user}** no servidor é **{level}**!\n🌐 Nível global: **{level2}**",
        err: ":x: Você não tem permissão para configurar o sistema de level!",
        err2: ":x: Canal inválido!",
        up: "🆙 Parabéns {user}, você subiu para o nível **{level}**!"
    },
    botinfo: {
        title: "<a:tlPaiNom:813102166885138484> Minhas informações",
        e: "e",
        txt: "Olá {user}! Meu nome neste servidor é **{client.name}**, eu tenho **15** anos.\n\n> Atualmente tenho **{commands}** comandos, estou atualmente em **{servers}** servidores, com **{users}** usuários!\n\n> Eu fui criada em <:javascript:813113701091377162>[JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) utilizando <:eris:836351428226056232>[Eris](https://abal.moe/Eris/).\n> Para ver minha lista de comandos use `{prefix}help`.\n\nVocê sabia que fazem **{uptime}** que estou acordada?"
    },
    permissions: {
        P1: "Criar convites instantâneos",
        P2: "Expulsar Membros",
        P3: "Banir Membros",
        P4: "Administrador",
        P5: "Gerenciar Canais",
        P6: "Gerenciar Servidor",
        P7: "Adicionar Reações",
        P8: "Ver o log de atividades",
        P9: "Prioridade de Voz",
        P10: "Transmissão",
        P11: "Ler Mensagens",
        P12: "Enviar Mensagens",
        P13: "Gerenciar Mensagens",
        P14: "Enviar links",
        P15: "Anexar Arquivos",
        P16: "Ler o histórico de mensagens",
        P17: "Mencionar Todos",
        P18: "Emojis Externos",
        P19: "Ver os dados do servidor",
        P20: "Conectar",
        P21: "Falar",
        P22: "Silenciar Membros",
        P23: "Ensurdecer Membros",
        P24: "Mover Membros",
        P25: "Usar VAD",
        P26: "Mudar Apelido",
        P27: "Gerenciar Apelidos",
        P28: "Gerenciar Cargos",
        P29: "Gerenciar Webhooks",
        P30: "Gerenciar Emojis",
        P31: "Usar comandos slash",
        P32: "Enviar Mensagens TTS"
    }
}