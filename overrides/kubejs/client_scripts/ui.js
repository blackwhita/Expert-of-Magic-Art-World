events.listen("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.background("eomaw:textures/bg.png");
        ui.widgetTexture = "eomaw:textures/widgets.png";

        ui.button((b) => {
            b.name = text.translate("menu.singleplayer");
            b.width = 150;
            b.x = 40;
            b.y = ui.height / 2 - 40;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //multiplayer
        ui.button((b) => {
            b.name = text.translate("menu.multiplayer");
            b.width = 150;
            b.x = 40;
            b.y = ui.height / 2 - 14;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Mods
        ui.button((b) => {
            b.name = text.translate("fml.menu.mods");
            b.width = 73;
            b.x = 40;
            b.y = ui.height / 2 + 12;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Issue tracker
        ui.button((b) => {
            b.name = text.of("KOOK");
            b.width = 73;
            b.x = 40 + b.width + 5;
            b.y = ui.height / 2 + 12;
            b.action = "https://kook.top/EFE04L";
            b.shadow = false;
        });

        //Options
        ui.button((b) => {
            b.name = text.translate("menu.options");
            b.width = 73;
            b.x = 40;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = text.of("Quit");
            b.width = 73;
            b.x = 40 + b.width + 5;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //ico
        ui.image((i) => {
            i.height = ui.width * 0.55;
            i.width = ui.width * 0.55;
            i.texture = "eomaw:textures/ico.png";
            i.y = ui.height - i.height + 8;
            i.x = ui.width - i.width;
        });

        //Pack name
        ui.image((i) => {
            i.height = 201 * 0.25;
            i.width = 825 * 0.25;
            i.x = 37;
            i.y = ui.height / 2 - 105;
            i.texture = "eomaw:textures/logo.png";
        });

        //Forge version
        ui.label((l) => {
            l.height = 10;
            l.name = "Forge Version: " + Platform.mods.forge.version;
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 31;
        });

        //Mods loaded
        ui.label((l) => {
            l.height = 10;
            l.name = Platform.mods.size() + " Mods Loaded";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 21;
        });

        //Mojang
        ui.label((l) => {
            l.height = 10;
            l.name = "Copyright Mojang AB";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 11;
        });
    });
});
