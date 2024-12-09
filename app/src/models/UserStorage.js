"use strcit";

const fs = require("fs").promises;

class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users) //users의 key값들만 리스트로 만듬 => [id, password, name]
            const userInfo = usersKeys.reduce((newUsers, info) => { //info라는 이름을 가진 빈 오브젝트 형태에 users의 key값들을 넣어줌
            newUsers[info] = users[info][idx]; //newUsers[id], newUsers[password], newUsers[name]
            return newUsers;
        }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
    })
        .catch(console.log);
    }

    static getUserInfo(id){
        //const users = this.#users; //위 #users를 users변수에 가져옴
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
    })
        .catch(console.log);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);
        console.log(users);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
            users.id.push(userInfo.id);
            users.password.push(userInfo.password);
            users.name.push(userInfo.name);
            fs.writeFile("./src/databases/users.json", JSON.stringify(users));
            return {success : true};
        
    }
}

module.exports = UserStorage;