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

    static getUserInfo(id){
        const users = this.#users; //위 #users를 users변수에 가져옴
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users) //users의 key값들만 리스트로 만듬 => [id, password, name]
        const userInfo = usersKeys.reduce((newUsers, info) => { //info라는 이름을 가진 빈 오브젝트 형태에 users의 key값들을 넣어줌
            newUsers[info] = users[info][idx]; //newUsers[id], newUsers[password], newUsers[name]
            return newUsers;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;