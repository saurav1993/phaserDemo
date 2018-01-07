demo.state9 = function(){};
demo.state9.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#0a4500";
        addChangeStateEventListners();
        console.log("state 9");
    },
    update : function(){}
};