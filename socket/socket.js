var socketio = require('socket.io')

module.exports.listen = function(app){
    io = socketio.listen(app)

    io.on('connection',function(socket) {
    	console.log('new connection')
    	socket.emit('news',{status:'connection'})
    })
    return io
}
/* use io parameter with globalio*/
module.exports.sendEvent = function(eventName,data,io){
	io.emit(eventName,data);

}