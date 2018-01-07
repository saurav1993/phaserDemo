demo.state7 = function(){};
demo.state7.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#000520";
        addChangeStateEventListners();
        console.log("state 7");
    },
    update : function(){}
};