'use strict';

module.exports = class Util {
  static color(color) {
        if (typeof color === 'string') {
          if (color.toLowerCase() === 'random') return Math.floor(Math.random() * (0xffffff + 1));
          if (color.toLowerCase() === 'default') return 0;
          color = parseInt(color.replace('#', ''), 16);
        } else if (Array.isArray(color)) {
          color = (color[0] << 16) + (color[1] << 8) + color[2];
        }
        
        if (color < 0 || color > 0xffffff) throw new Error ("A cor deve ser um código hex!");
        else if (color && isNaN(color)) throw new Error ("Não foi possível converter a cor para número :(");
        
        return color;
    }

  static aniversario(string) {
    const { utc } = require("moment-timezone");

    let data = string.split('/').filter(a => a.length > 0);

    if (data.length < 3 || isNaN(data[0]) || isNaN(data[1]) || isNaN(data[2])) throw new Error("Data inválida!");

    let a = utc(Date.now()).format("YYYY");
    let m = utc(Date.now()).format("MM");
    let d = utc(Date.now()).format("DD");

    const niver = {}

    niver.mes = parseInt(data[1] - m);
    niver.dia = parseInt(data[0] - d);
    niver.ano = parseInt(data[2] - a);

    let conta = "";
    if (niver.mes > 0) {
        conta = niver.ano + 1;
    } else {
        conta = niver.ano;
    }

    return `${conta}`.replace("-", "")
  }

  static parseEmoji(text) {
    if (text.includes('%')) text = decodeURIComponent(text);
    if (!text.includes(':')) return { animated: false, name: text, id: null };
    const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
    if (!m) return null;
    return { animated: Boolean(m[1]), name: m[2], id: m[3] || null };
  }

  async urlToObj(url) {
    return await new Buffer.from(url, "base64");
  }

  static removeAcents(text) {
    text = text.toLowerCase()
    .replace(new RegExp('[ÀÁÂÃÄÅÆĀĂĄ]', 'gi'), 'a')
    .replace(new RegExp('[ÈÉÊËĒĖĘĚĔƏ]', 'gi'), 'e')
    .replace(new RegExp('[ÌÍÎÏİĮĪ]', 'gi'), 'i')
    .replace(new RegExp('[ÒÓÔÕŒŐØÖ]', 'gi'), 'o')
    .replace(new RegExp('[ÙÚÛÜŲŰŮŪ]', 'gi'), 'u')
    .replace(new RegExp('[ŇŅŃÑ]', 'gi'), 'n')
    .replace(new RegExp('[ŹŻŽ]', 'gi'), 'z')
    .replace(new RegExp('[ŚŠŞ]', 'gi'), 's')
    .replace(new RegExp('[ĎĐ]', 'gi'), 'd')
    .replace(new RegExp('[ĢĞ]', 'gi'), 'g')
    .replace(new RegExp('[Ķ]', 'gi'), 'k')
    .replace(new RegExp('[ĹĻĽŁ]', 'gi'), 'l')
    .replace(new RegExp('[Ý]', 'gi'), 'y')
    .replace(new RegExp('[ŤȚŢ]', 'gi'), 't')
    .replace(new RegExp('[ŔŘ]', 'gi'), 'r')
    .replace(new RegExp('[ČĆÇ]', 'gi'), 'c')
    return text;
  }
}