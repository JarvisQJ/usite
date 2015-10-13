var crypto=require("crypto")
    , User=require("../models/User")
    , Post=require("../models/post")
	,logger = require('../Logger')
	;
exports.index = function(req, res){
   Post.find(req.params.user,function(err,posts){
		var _posts=posts?posts:[];
		logger.info("进入首页");
        res.render("index2",{
            title:"piaoliang首页",
            posts:_posts
        });
   });

};
exports.user=function(req,res){
    User.find(req.params.user,function(err,user){
       if(!user){
           req.session.error="用户不存在";
            return res.redirect("/");
       }
       Post.findByName(user[0].name,function(err,posts){
            if(err){
                req.session.error=err;
                return req.redirect("/");
            }
           res.render("user",{
               title:user.name,
               posts:posts
           })
       });
    });
}
exports.post=function(req,res){
    var currentUser=req.session.user;
    /*var post=new Post(currentUser.name,req.body.post);
    post.save(function(err){
        if(err){
            req.session.error=err;
            return res.redirect("/");
        }
        req.session.success="发表成功";
        res.redirect("/u/"+currentUser.name);
    });*/
	User.findByName(currentUser.name,function(err,user){
		if(!user){
           req.session.error="用户不存在";
            return res.redirect("/");
       }else{
		   var newPost = {user:user.name,post:req.body.post}
		   Post.create(newPost,function(err){
			   if(err){
				   req.session.error=err;
					return res.redirect("/");
			   }
			    req.session.success="发表成功";
				res.redirect("/u/"+currentUser.name);
		   });
	   }	
	});
	
	
}
/**
 * 跳转注册页面
 * @param req
 * @param res
 */
exports.reg=function(req,res){
    res.render('reg', { title: "注册页面"});
}
/**
 * 注册操作
 * @param req
 * @param res
 * @return {*}
 */
exports.doReg=function(req,res){
    //检验用户两次输入的口令是否一致
    if(req.body["password-repeat"]!=req.body['password']){
        req.session.error="两次输入的口令不一致";
        return res.redirect("/reg");
    }
    //生成口令的散列值，我们使用md5加密
    var md5=crypto.createHash('md5');
    var password=md5.update(req.body.password).digest("base64");
    //声明需要添加的用户
   /* var newUser=new User({
        name:req.body.username,
        password:password
    });*/
	var newUser = {name:req.body.username,password:password};
	
    User.findByName(newUser.name,function(err,user){
       //如果用户已经存在
       if(user){
           req.session.error="该用户已经存在";
           return res.redirect("/reg");
       }
       //如果不存在则添加用户
        /*newUser.save(function(err){
            if(err){
                req.session.error=err;
                return res.redirect("/reg");
            }
            req.session.user=newUser;
            req.session.success="注册成功";
            res.redirect("/");
        })*/
		
		User.create(newUser,function(err){
			 if(err){
                req.session.error=err;
                return res.redirect("/reg");
            }
            req.session.user=newUser;
            req.session.success="注册成功";
            res.redirect("/");
		});
		
    })
}
/**
 * 跳转登录页面
 * @param req
 * @param res
 */
exports.login=function(req,res){
    res.render('login', { title: "登录页面"});
}
/**
 * 登录操作
 * @param req
 * @param res
 */
//function doLogin(){
//    var md5=crypto.createHash("md5");
//    var pwd=md5.update($("#password").val().trim()).digest("base64");
//    var username=$("#username").val().trim();
//    $.ajax({
//        url:"/login",
//        type:"post",
//        data:{
//            name:username,
//            password:pwd
//        },
//        dataType:"json",
//        success:function(){
//
//        }
//    });
//};
exports.doLogin=function(req,res){
    //将登录的密码转成md5形式
    var md5=crypto.createHash("md5");
    var password=md5.update(req.body.password).digest("base64");
    //验证用户
    User.findByName(req.body.username,function(err,user){
        //首先根据用户名查询是否存在
		if(!user){
            req.session.error="用户不存在";
            return res.redirect("/");
        }
        //验证密码是否正确
        if(user.password!=password){
            req.session.error="用户密码错误";
            return res.redirect("/");
        }
		var _user = {name:user.name,password:user.password};

        req.session.user=_user;

        req.session.success="登录成功";
		logger.info('登录成功');
        res.redirect("/publisher");
    })
}

/**
 * 手机登录操作
 * @param req
 * @param res
 */
exports.doLoginCell = function(req,res){
    //将登录的密码转成md5形式
    var md5=crypto.createHash("md5");
    var password=md5.update(req.body.password).digest("base64");
	
	console.log("<<<<<<<LOGIN");
	console.log("phoneNumer:"+req.body.phoneNumber);
	console.log("password:"+req.body.password);
	var data={
		"userId":"12345",
		"userName":"印度啊三",
		"avatar":"\\assets\\img\\0.jpg",
		"token":"56789910"
	};

	res.send(data);
}

/**
 * 退出操作
 * @param req
 * @param res
 */
exports.logout=function(req,res){
    req.session.user=null;
    req.session.success="退出成功";
    res.redirect("/");
}



/**
 * 视频发布页面
 * @param req
 * @param res
 */
exports.publish=function(req,res){

/**屏蔽注册直接进入直播
       var currentUser=req.session.user;
	   
	   if(!currentUser){
		   req.session.error='请登录后在发布视频';
		   return res.redirect("/");
	   }

	User.findByName(currentUser.name,function(err,user){
		if(!user){
           req.session.error="用户不存在";
             res.redirect("/");
        }else{
			res.render('publisher', { title: "知人直播"});
		}
	   
	});
	**/
	res.render('publisher', { title: "知人直播"});
};



/**
 * 频道页面(会议页面)
 * @param req
 * @param res
 */

exports.channel=function(req,res){

    res.render('channel_pc',{"layout":false,title:'知人直播'});
	
};

exports.channel_ph=function(req,res){

    res.render('channel_ph',{"layout":false,title:'知人直播'});
	
};

/**
 * 内嵌 频道页面(内嵌会议页面)
 * @param req
 * @param res
 */
exports.inframe = function(req,res){
	res.render('channel',{"layout":false,title:'内嵌会议现场'});
}

