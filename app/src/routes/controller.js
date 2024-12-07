"use strict";

const output = {
    home : (req, res)=> {
        res.render("index");    
    },

    login : (req, res)=>{
        res.render("login");
    }
};

const users = {
    id : ["oksktmddjs"],
    password : ["1234"]
};

const process = {
    login : (req, res)=> {
        const id = req.body.id,
        password = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success : true
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인 실패"
        });
    },
}

module.exports = {
    output, process
}