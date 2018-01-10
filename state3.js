demo.state3 = function(){};
demo.state3.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#aa0000";
        addChangeStateEventListners();
        
    },
    update : function(){}
};