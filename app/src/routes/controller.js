"use strict";

const User = require("../models/User");
const UserStorage = require("../models/UserStorage");

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
    login : async (req, res)=> {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register : async(req, res)=>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
}

module.exports = {
    output, process
}