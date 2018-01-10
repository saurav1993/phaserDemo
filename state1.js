
demo.state1 = function(){};
var cursors, vel = 500,stones,grass;
demo.state1.prototype = {
    preload : function(){
        game.load.tilemap("field","assets/tilemaps/field.json",null,Phaser.Tilemap.TILED_JSON);
        game.load.image("grass","assets/tilemaps/tiles.png");
        game.load.image("stone","assets/tilemaps/stone.png");
        game.load.image("adam","assets/sprites/adam.png")
    },
    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#DDDDDD";
        addKeyCallback(Phaser.Keyboard.ZERO,changeState,0);
        addChangeStateEventListners();
        
        var map = game.add.tilemap("field");
        map.addTilesetImage("grass");
        map.addTilesetImage("stone");

        //order of craeating layer is important
        grass = map.createLayer("grass");
        stones = map.createLayer("stones");

        adam = game.add.sprite(200,200,"adam");
        adam.scale.setTo(0.2,0.2);
        game.physics.enable(adam);

        cursors = game.input.keyboard.createCursorKeys();

        map.setCollisionBetween(4,11,true,"stones");
        map.setCollision(2,true,"grass");

    },
    update : function(){

        game.physics.arcade.collide(adam,stones,function(){
            console.log("collision with the rock!");
        });
        game.physics.arcade.collide(adam,grass,function(){
            console.log("collision with the grass!");
        });

        if(cursors.up.isDown){
            adam.body.velocity.y = -vel; 
        }
        else if(cursors.down.isDown){
            adam.body.velocity.y = vel; 
        }
        else {
            adam.body.velocity.y = 0;
        }
        if(cursors.right.isDown){
            adam.body.velocity.x = vel; 
        }
        else if(cursors.left.isDown){
            adam.body.velocity.x = -vel; 
        }
        else {
            adam.body.velocity.x = 0;
        }
      
    }
};