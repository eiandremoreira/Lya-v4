const { Member, User } = require("eris");

User.prototype.toString = function () { return `<@!${this.id}>` };
Member.prototype.toString = function () { return `<@!${this.id}>` };