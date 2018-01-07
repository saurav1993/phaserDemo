var demo = {};
demo.state0 = function(){};
var centerx = 1500/2;
var centery = 1000/2;
var adam;
var speed = 4;
demo.state0.prototype = {
    preload : function(){
        game.load.image("adam","assets/sprites/adam.png");
    },
    create : function(){
        game.stage.backgroundColor = "#800060";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        addChangeStateEventListners();
        console.log("state 0");

        //adam
        //adds adam to the game world
        adam =  game.add.sprite(centerx,centery,"adam");
        //sets the anchor of adam from the top left corner to the center of the image
        adam.anchor.setTo(0.5,0.5);
    },
    update : function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

function changeState(i,stateNum){
    game.state.start("state"+stateNum);
}

function addKeyCallback(key,fn,args){
    game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListners(){
    addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
    addKeyCallback(Phaser.Keyboard.ONE,changeState,1);
    addKeyCallback(Phaser.Keyboard.TWO,changeState,2);
    addKeyCallback(Phaser.Keyboard.THREE,changeState,3);
    addKeyCallback(Phaser.Keyboard.FOUR,changeState,4);
    addKeyCallback(Phaser.Keyboard.FIVE,changeState,5);
    addKeyCallback(Phaser.Keyboard.SIX,changeState,6);
    addKeyCallback(Phaser.Keyboard.SEVEN,changeState,7);
    addKeyCallback(Phaser.Keyboard.EIGHT,changeState,8);
    addKeyCallback(Phaser.Keyboard.NINE,changeState,9);
}