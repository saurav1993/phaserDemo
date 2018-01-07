demo.state5 = function(){};
demo.state5.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#060006";
        addChangeStateEventListners();
        console.log("state 5");
    },
    update : function(){}
};