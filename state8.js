demo.state8 = function(){};
demo.state8.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#029000";
        addChangeStateEventListners();
        console.log("state 8");
    },
    update : function(){}
};