'use strict'

const mongoose = require('mongoose');
require('../../../models/login');
const Login = mongoose.model('Login');
const router = require('koa-router')();

exports.login = async (ctx) => {
  let name = ctx.request.body.user_name;
  let passwd = ctx.request.body.user_pw;
  console.log(name);
  console.log(passwd);
  let temp = await Login.findOne({username:name});
  console.log(temp);
  if(temp == null){
    ctx.response.body = {status: 500, message:'用户名不存在', res: temp};
  }else if(temp.userpw==passwd){
    ctx.response.body = {status: 200, message:'登录成功', res: temp};
  }else{
    ctx.response.body = {status: 400, message:'密码错误', res: temp};
  }
}
