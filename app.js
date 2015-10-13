
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  ,engine=require('./expand_modules/ejs')
  , util=require('util')
  , path = require('path')
  , mongoose = require('mongoose')
  , session = require('express-session')
  , sessionStore = require('session-mongoose')(express)
  ,connection = require('./models/db')
  ,logger = require('./Logger')
  , settings = require('./settings')
  //,socket = require('socket.io')
        //验证码
   // ,ccap = require('ccap')
  ;
  debugger;
var app = express();

var server = http.Server(app);

 require('./socket')(server);

//改造ejs引擎中的方法
//app.engine('ejs', engine);

app.engine('ejs',require('ejs').__express);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set("view options", {
  layout: true
});
  //设置默认模版路径
  //app.locals._layoutFile='layout'
  
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
	
  connection.getConnect();
  
  var _store  = new sessionStore({
      interval:120000,
	  connection:connection.mongoose.connection
  });
  
app.use(session({
    secret:settings.cookieSecret
    ,store:_store
	,resave:false
    //,saveUninitialized:false
}));

/*
  app.get('/',function(req,res){
	  console.log(req.session);
	  if(req.session&&req.session.isVisit){
		  req.session.isVisit++;
		 res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
	  }else{
		  req.session.isVisit = 1;
		  res.send("欢迎第一次来这里");
		  console.log(req.session);
	  }
  });
  */
  
   //使用中间件来返回成功和失败的信息
  app.use(function(req, res, next){
        //声明变量
        var err = req.session.error
            , msg = req.session.success;
        //删除会话中原有属性
        delete req.session.error;
        delete req.session.success;
        //将错误和正确信息存放到动态试图助手变量中。
        res.locals.message = '';
        if (err) res.locals.message = '<div class="alert alert-error">' + err + '</div>';
        if (msg) res.locals.message = '<div class="alert alert-success">' + msg + '</div>';
        next();
  });
  
      //使用中间件把user设置成动态视图助手
    app.use(function(req, res, next){
        res.locals({
            user:req.session.user
        })
        next();
    });
	/*
	logger.trace('trace log');
	logger.debug('debug log');
	logger.info('info log');
	logger.warn('warn log');
	logger.error('error log');
	logger.fatal('fatal log');
	
    exports.logger = logger;
	*/
	
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function(){
  app.use(express.errorHandler());
});
/*路由规划*/
app.get('/', routes.index);
app.get("/u/:user",routes.user); //用户的主页
app.post('/post',routes.post);   //发表信息
app.get('/reg',routes.reg); //用户注册
app.post('/reg',routes.doReg);
app.get('/login',routes.login);//用户登录

app.post('/login',routes.doLogin);

app.post('/login/cell', routes.doLoginCell);

app.get('/logout',routes.logout);//用户退出

app.get('/publish', routes.publish);//发布视频

app.get('/channel', routes.channel);//频道中设置
app.get('/channel_ph', routes.channel_ph);//频道中设置

app.get('/inframe', routes.inframe);//在inframez中显示频道


/*
io.on('connection',function(socket){
	console.log('a user connected'+socket);
	logger.info('a user connected');
});*/


module.exports = app;
/*
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});*/

server.listen(3000, function(){
  console.log('listening on *:3000');
});



