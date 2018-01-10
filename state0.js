var demo = {};
demo.state0 = function(){};
var centerx = 1000/2;
var centery = 1000/2;
var adam;
var speed = 6;
demo.state0.prototype = {
    preload : function(){
        game.load.spritesheet("adam","assets/spritesheets/adamSheet.png",32,57);
        game.load.image("tree","assets/backgrounds/background.png");
    },
    create : function(){
        //initailize physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,1500,1000);
        game.stage.backgroundColor = "#800060";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        addChangeStateEventListners();

         //background image
         var bg = game.add.sprite(0,0,"tree");
        //adam
        //adds adam to the game world
        adam =  game.add.sprite(centerx,centery,"adam");
        //sets the anchor of adam from the top left corner to the center of the image
        adam.anchor.setTo(0.5,0.5);
        //scale down adam
        adam.scale.setTo(5,5);
        //enable physics on adam
        game.physics.enable(adam);
        //stop adam at world bounds
        adam.body.collideWorldBounds = true;
        //camera
        
        game.camera.follow(adam);
       // camera will move with the adam
         game.camera.deadzone = new Phaser.Rectangle(centerx - 300, 0,600,1000)
       //animation
       adam.animations.add("walk",[0,1,2,3,4,5,6]);
    },
    update : function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
            adam.scale.setTo(5,5);
            adam.animations.play("walk",14,true);;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
            //this will make adam face left 
            adam.scale.setTo(-5,5);
            adam.animations.play("walk",14,true);
        } else{
            adam.animations.stop("walk");
            adam.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            if (adam.y < 451){
                adam.y = 451;
            }
            adam.y -= speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
            if (adam.y > 703){
                adam.y = 703;
            }
        }
    }
};

function changeState(i,stateNum){
    console.log("state" + stateNum);
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