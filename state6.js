demo.state6 = function(){};
demo.state6.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#077000";
        addChangeStateEventListners();
        console.log("state 6");
    },
    update : function(){}
};