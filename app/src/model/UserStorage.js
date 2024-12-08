"use strcit";

class UserStorage {
    static #users = {
        id : ["oksktmddjs"],
        password : ["1234"],
        name : ["이승언"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;