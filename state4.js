demo.state4 = function(){};
demo.state4.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#004400";
        addChangeStateEventListners();
        console.log("state 4");
    },
    update : function(){}
};