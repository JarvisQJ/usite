//引入数据库操作模块
var mongodb=require("./db");

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var model_name='users';

//声明User Schema结构
var usersSchema = new Schema({
	name:String,
	password:String
});

mongoose.model(model_name,usersSchema);

//将User类给予接口
var UserModel = mongoose.model(model_name);


/**
 * 增加查询用户静态方法
 * @param username 用户名
 * @param callback
 */
 
UserModel.findByName = function find(username,callback){
	 //查找name属性为usename的文档
	 UserModel.findOne({name:username},callback);
}

module.exports = UserModel;

