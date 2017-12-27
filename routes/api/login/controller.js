'use strict'

const sql = require('../../../mysqlconfig');




exports.login = async (ctx) => {
  let name = ctx.request.body.user_name;
  let passwd = ctx.request.body.user_pw;
  console.log(name);
  console.log(passwd);
  let temp;
  await sql.query("select * from loginInformation where user_name = '" + name + "' and user_pw = '"+ passwd +"';")
    .then(function(result) {
    console.log(result);
    temp =result;
    return result;
  }, function(error){
    return -1;
  });
  //console.log(tmp);
  console.log("*****************************************");
  console.log(temp);
  if(temp != ""){
    ctx.response.body = {status: 200, message:'success'}
  }else{
    ctx.response.body = {status: 400, message:'false'}
  }
}
