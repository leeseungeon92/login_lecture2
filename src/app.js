"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes");

//앱 세팅
app.set("views", "./views"); //1pm = view 설정, 2pm = view 경로
app.set("view engine", "ejs") //1pm = view engine 세팅, 2pm = "ejs"파일로 설정

app.use("/", home);

module.exports = app;