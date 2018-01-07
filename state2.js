demo.state2 = function(){};
demo.state2.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#000ff0";
        addChangeStateEventListners();
        console.log("state 2");
    },
    update : function(){}
};