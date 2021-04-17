async function tag(id) { 
    return `${this.client.getRESTUser(id).username}#${this.client.getRESTUser(id).discriminator}` 
};