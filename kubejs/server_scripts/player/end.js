/*onEvent("player.tick", event => {
    if(event.player.creativeMode || event.player.creativeMode.spectator){
        event.player.stages.add("not_survival");
        event.player.stages.remove("survival");
    }else {
        event.player.stages.remove("not_survival");
        event.player.stages.add("survival");
    }
})
onEvent('player.inventory.changed', e => {
    if(e.player.inventory.find('avaritia:akashic_record') == -1) return
    if(e.player.tags.contains('avaritia:akashic_record')) return
    e.player.tags.add('avaritia:akashic_record')
    e.player.tell([Text.lightPurple('[author（blackwhita）]')])
  })
onEvent('player.chat',function (event){
    let input = event.message.trim();//
    if(event.player.stages.has("end_item")){
        event.server.tell([Text.blue('[end]').bold(), `<${event.player.name}> ${input}`]);
        event.cancel();
    }
})*/














//, ` 恭喜你，亲爱的${e.player.name}，你成功的通关了这个整合包，如果你继续玩下去可能发现很多彩蛋，当然，如果你没有发现全部的彩蛋 `