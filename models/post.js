/**
 *微博的model类
 */
// var mongodb=require("./db");
var User=require("./User");

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var model_name='post';

//TODO完善类型数据
var postSchema = new Schema({
	user:String,
	post:String
    ,time:{type:Date, default: Date.now}
});

mongoose.model(model_name,postSchema);

var PostModel = mongoose.model(model_name);
	
  PostModel.findByName = function(username,callback){

	PostModel.find({user:username}).sort({time:-1}).exec(function(err,docs){
		   callback(err,docs);
	})
}

module.exports=PostModel;

