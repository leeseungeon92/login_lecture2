"use strict";

const User = require("../model/User");
const UserStorage = require("../model/UserStorage");

const output = {
    home : (req, res)=> {
        res.render("index");    
    },

    login : (req, res)=>{
        res.render("login");
    },

    register : (req, res)=>{
        res.render("register");
    }
};

const process = {
    login : (req, res)=> {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);
    },

    register : (req, res)=>{
        const id = req.body.id,
        password = req.body.password;

        const users = UserStorage.getUsers("id","password");

        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인 실패";
        return res.json(response);
    }
}

module.exports = {
    output, process
}