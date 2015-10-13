
var socket = require('socket.io')
	,logger = require('./Logger');


function so(server){
	var io = socket(server);

	var chats=[{"user_id":3166794,"live_id":262755,"room_id":111259,"group_chat_id":6839580,"timestamp":1443085731,"group_chat_message_type":"TEXT","message":{"data":"1"}},{"user_id":3166794,"live_id":262755,"room_id":111259,"group_chat_id":6839591,"timestamp":1443085762,"group_chat_message_type":"TEXT","message":{"data":"2"}},{"user_id":3166794,"live_id":262755,"room_id":111259,"group_chat_id":6875390,"timestamp":1443151961,"group_chat_message_type":"TEXT","message":{"data":"111"}}];
	
	var newchats=[];
	
	io.on('connection', function(socket){
	  console.log('a user connected');
	  
	  var video_tag=false;
	  
	  socket.on('serverMessage',function(msg){
		  var service_type = msg['service_type'];
		  var message ="";
		  var pubmessage="";
		  switch(service_type){
			  case 'CORE':
				 console.log('<<<<<<<<<<<< CORE');
				 console.log(JSON.stringify(msg));
				 
				 if(msg.service_request.action_type=='FETCH_USER_INFO'){
					var userId = msg.service_request.user_id;
					var avatar ="";
					 if(userId='3166794'){
						avatar ="//assets//img//1440745889533.jpg";
					 }else{
						avatar ="//assets//img//0.jpg"
					 }
					 
					message ={"message_type":"RESPONSE","service_type":"CORE","response_status":200,"service_response":{"action_type":"FETCH_USER_INFO","action_data":{"user_info":{"id":3433988,"avatar":"","nickname":"Jovi","phone_number":"15527270957","location":"NONE","gender":"male","signature":"Va","passwd_md5":"NONE"}}},"seq_num":1443083048316};
					io.emit('serverMessage',message);
					console.log('>>>>>>>>>>>>>> Response');
					console.log(message);
				 }
				 
				break;
			  case 'AUTH':
				 console.log('<<<<<<<<<<<< AUTH');
				 console.log(JSON.stringify(msg));
				 
				 if(msg.service_request.action_type=='JOIN_ROOM'){
					 message ={"message_type":"RESPONSE","service_type":"AUTH","response_status":200,"service_response":{"action_type":"JOIN_ROOM"},"version":{},"seq_num":msg.seq_num};
				 }else if(msg.service_request.action_type=='JOIN_LIVE'){
					 message = {"message_type":"RESPONSE","service_type":"AUTH","response_status":200,"service_response":{"action_type":"JOIN_LIVE"},"version":{},"seq_num":msg.seq_num};
				 }else if(msg.service_request.action_type=='LEAVE_LIVE'){
					 message = {"message_type":"RESPONSE","service_type":"AUTH","response_status":200,"service_response":{"action_type":"LEAVE_LIVE"},"version":{},"seq_num":msg.seq_num};
				 }
				 io.emit('serverMessage',message);
				 console.log('>>>>>>>>>>>>>> '+message.message_type);
				 console.log(message);
				break;
			  case 'LIVE':
				console.log('<<<<<<<<<<<<<< LIVE');
				console.log(JSON.stringify(msg));
				
				message=
				   {"message_type":"RESPONSE","service_type":"LIVE","response_status":200,"service_response":{"action_type":"FETCH_LIST","action_data":{"liveListInfos":[{"live_info":{"id":262755,"name":"Jillthe","locked":false,"free_live":true,"closed":false,"silence":false,"room_id":111259,"user_id":3433988},"user_number":2,"is_live":true}]}},"version":{},"seq_num":1440992459491};
				   io.emit('serverMessage',message);
				
				console.log('>>>>>>>>>>>>>> Response');
				console.log(message);
				 
				break;
				
			  case 'HISTORY':
				console.log('<<<<<<<<<<<<<< HISTORY');
				console.log(JSON.stringify(msg));
				
				message={"message_type":"RESPONSE","service_type":"HISTORY","response_status":200,"service_response":{"action_type":"FETCH_COUNT","action_data":{"published":0,"unpublished":0}},"version":{},"seq_num":1440992459492};
				io.emit('serverMessage',message);
				
				console.log('>>>>>>>>>>>>>> Response');
				console.log(message);
				 
				break;
				
				case 'GROUP_CHAT':
				console.log('<<<<<<<<<<<<<< GROUP_CHAT');
				console.log(JSON.stringify(msg));
				
				 if(msg.service_request.action_type=='SEND'){
					 
					 //chats.push(msg.service_request.action_data.group_chat_message);
					 newchats.push(msg.service_request.action_data.group_chat_message);
					 message={"message_type":"RESPONSE","service_type":"GROUP_CHAT","response_status":200,"service_response":{"action_type":"SEND"},"version":{"serialize_number":6839591,"service_type":"GROUP_CHAT","version_type":"LIVE","id":262755},"seq_num":1443085766674};
					 io.emit('serverMessage',message);
					 console.log('>>>>>>>>>>>>>> RESPONSE');
					 console.log(message);
					 
					 console.log('>>>>>>>>>>>>>> PUBLISH');
					 pubmessage = {"message_type":"PUBLISH","version":{"serialize_number":6839591,"service_type":"GROUP_CHAT","version_type":"LIVE","id":262755}};
					 io.emit('serverMessage',pubmessage);
					console.log(pubmessage);
				 }else if(msg.service_request.action_type=='FETCH'){
					 var _cs = newchats.length>0?newchats:chats;
					 newchats=[];
					message={"message_type":"RESPONSE","service_type":"GROUP_CHAT","response_status":200,"service_response":{"action_type":"FETCH","action_data":{"group_chat_message":_cs}},"version":{},"seq_num":msg.seq_num};
					io.emit('serverMessage',message);
					 console.log('>>>>>>>>>>>>>> RESPONSE');
					 console.log(message);
				 }
				  
				break;
			  
			 case 'MEDIA':
				console.log('<<<<<<<<<<<<<< MEDIA');
				console.log(JSON.stringify(msg));
				message= null;
				if(msg.service_request.action_type=='FETCH_AUDIO_URL'){
					message={"message_type":"RESPONSE","service_type":"MEDIA","response_status":200,"service_response":{"action_type":"FETCH_AUDIO_URL","action_data":{"audio_urls":{"android":"http://m3u8.dian.fm/audio/roomid262755/android/aacts/1440992398live.m3u8","ios":"http://m3u8.dian.fm/audio/roomid262755/ios/aac/1440992398live.m3u8"}}},"seq_num":1440992459884};
				}else if(msg.service_request.action_type=='FETCH_VIDEO_URL'){
					if(!video_tag){
						video_tag = true;
						message={"message_type":"RESPONSE","service_type":"MEDIA","response_status":200,"service_response":{"action_type":"FETCH_VIDEO_URL","action_data":{"video_urls":{"hls":"http://192.168.199.234/hlsapp/mystream.m3u8"}}},"seq_num":1440992459884};
					}
				}
				
				if(message){
					io.emit('serverMessage',message);
					console.log('>>>>>>>>>>>>>> Publish');
					console.log(message);
				}
				 
				break;
				
			  case 'HEARTBEAT':
				console.log('<<<<<<<<<<<<<< HEARTBEAT');
				console.log(JSON.stringify(msg));
				
				message={"message_type":"RESPONSE","service_type":"HEARTBEAT","response_status":200,"service_response":{},"version":{},"seq_num":1440992459806};
				io.emit('serverMessage',message);
				
			
				console.log('>>>>>>>>>>>>>> Response');
				console.log(message);
				
				//onLineNumber
				pubmessage = {"message_type":"PUBLISH","version":{"serialize_number":1443085772440,"service_type":"ONLINE","version_type":"LIVE","id":262755,"data":{"online_user_number":100}}};
				io.emit('serverMessage',pubmessage);
				console.log('>>>>>>>>>>>>>> publish');
				console.log(pubmessage);
				
				//CORE-ROOM
				pubmessage = {"message_type":"PUBLISH","version":{"serialize_number":1,"service_type":"CORE","version_type":"ROOM","id":111259,"data":{"roomUserAdminList":[{"room_id":111259,"user_id":3433988,"admin_level":65536}],"room":{"id":111259,"name":"Jillthe","avatar":"http://image-storage.b0.upaiyun.com/hongdian-android/2015/8/353925065414006/28/1440745889533.jpg","webaddr":"111259","description":"随便扯","is_canceled":false,"has_passwd":false}}}};
				io.emit('serverMessage',pubmessage);
				console.log('>>>>>>>>>>>>>> publish');
				console.log(pubmessage);
				
				//MediaUrl
				//返回视频地址，让页面播放视频
				pubmessage = {"message_type":"PUBLISH","version":{"serialize_number":13,"service_type":"MEDIA","version_type":"LIVE","id":262755,"data":{"user_id":[],"video_user_id":[3433988]}}};
				io.emit('serverMessage',pubmessage);
				logger.info('serverMessage:'+pubmessage);
				console.log('>>>>>>>>>>>>>> publish');
				console.log(pubmessage);
				break;
				
			  default:
				 console.log('Nothing stify');
		  }
			
			
	  });
	});
	
}

module.exports = so;



