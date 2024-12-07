"use strict";

//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const home = require("./src/routes");

//앱 세팅
app.set("views", "./src/views"); //1pm = view 설정, 2pm = view 경로
app.set("view engine", "ejs") //1pm = view engine 세팅, 2pm = "ejs"파일로 설정
app.use(express.static(`${__dirname}/src/public`)) //미들웨어 , dirname = app.js 위치를 가리킴
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", home);

module.exports = app;