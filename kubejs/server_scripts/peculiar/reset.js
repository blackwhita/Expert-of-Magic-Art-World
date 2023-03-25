events.listen('server.load', function (event) {
    if(reset == true) {
        event.server.schedule(117 * MINUTE, event.server, function (callback) {
            callback.data.tell('服务器将在3分钟后重启!')
            callback.reschedule(2 * MINUTE)
        })
    
        event.server.schedule(120 * MINUTE, event.server, function (callback) {
            callback.data.runCommand('/stop')
        })
    } 
  })