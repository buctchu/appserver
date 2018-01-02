const mongoose = require('mongoose');
require('../../../models/login');
const Login = mongoose.model('Login');
const router = require('koa-router')();

exports.signin = async (ctx) => {

  const newlogin = new Login({
                    username: ctx.request.body.user_name,
                    userpw: ctx.request.body.user_pw,
                });
  console.log(newlogin);
  let temp = await Login.findOne({username:ctx.request.body.user_name});
  console.log(temp);
  if(temp == null){
    let insertResult = await newlogin.save();
    console.log(insertResult);
    if(insertResult){
        ctx.response.body = {status: 200, message:'注册成功', res: insertResult};
    }
  }else{
    ctx.response.body = {status: 500, message:'用户名已经存在', res: temp};
  }
}
