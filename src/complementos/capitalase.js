const { Message } = require("eris");

Message.prototype.capitalase = async function (string, options) {
    if (options === true) {
        return await string.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
    } else if (options === false) {
        return await string.charAt(0).toUpperCase()+string.slice(1);
    } else {
        return await string.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' ');
    }
}