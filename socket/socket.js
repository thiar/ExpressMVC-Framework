var socketio = require('socket.io')
module.exports.listen = function(server,app){
    io = socketio.listen(server)
    io.use(require("express-socket.io-session")(app.settings.session,{autoSave:true}));
    console.log(app.settings.session)
    io.on('connection',function(socket) {
    	console.log('new connection')
    	
    	socket.emit('news',{status:'connection'})
    	socket.emit('newLogin',{status:'connection'})
    	socket.on('sendEvent',function(data){
    		console.log(socket.handshake.session.user)
    	})
    })
    return io
}
/* use io parameter with globalIo*/
module.exports.sendEvent = function(eventName,data,io){
	io.emit(eventName,data);

}