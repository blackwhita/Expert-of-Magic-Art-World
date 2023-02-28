onEvent('player.chat',function (event){
    let input = event.message.trim();//获取聊天信息
    if(event.player.name=='blackwhita'){
        event.server.tell([Text.blue('[MVP--]').bold(), `<${event.player.name}> ${input}`]);
        event.cancel();
    }
})
