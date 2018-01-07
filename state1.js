
demo.state1 = function(){};
demo.state1.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#DDDDDD";
        addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
        addChangeStateEventListners();
        console.log("state 1");
    },
    update : function(){}
};