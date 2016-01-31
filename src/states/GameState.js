//import RainbowText from 'objects/RainbowText';

class GameState extends Phaser.State {

	preload() {

		var char_as_data = "data:image/png;base64,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";
		this.game.load.spritesheet('character', char_as_data, 16, 24);
		this.game.load.image('wallV', 'assets/wallVertical.png');
      	this.game.load.image('wallH', 'assets/wallHorizontal.png');

	}


	create() {
		let center = { 
			x: this.game.world.centerX, 
			y: this.game.world.centerY 
		};

		// Enable Physics Engine
		this.game.physics.startSystem(Phaser.Physics.ARCADE);




		// Background
		this.game.stage.backgroundColor = '#3498db';

		// Player
		this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'character');
  		this.player.anchor.setTo(0.5, 0.5);
  		this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

  		// Player Animations
		var playerWalkSpeed = 10; 
		this.walkDown 	= this.player.animations.add('walkDown', [0, 1], playerWalkSpeed, true);
    	this.walkRight 	= this.player.animations.add('walkRight', [2, 3], playerWalkSpeed, true);
    	this.walkUp 	= this.player.animations.add('walkUp', [4, 5], playerWalkSpeed, true);
    	this.walkLeft 	= this.player.animations.add('walkLeft', [6, 7], playerWalkSpeed, true);



		// Controls
		this.cursor = this.game.input.keyboard.createCursorKeys();
		
		
	}


	update() {
		// Tell Phaser that the player and the walls should collide
		this.game.physics.arcade.collide( this.player, this.walls );		
		this.movePlayer();
	}


	movePlayer() {

		var speed = 200;

		this.player.body.velocity.y = 0;
		this.player.body.velocity.x = 0;

		if ( this.cursor.up.isDown || this.cursor.down.isDown || this.cursor.right.isDown || this.cursor.left.isDown ) {
			if(this.cursor.up.isDown) {
				this.player.body.velocity.y -= speed;
				this.player.animations.play('walkUp');
			}
			else if(this.cursor.down.isDown) {
				this.player.body.velocity.y += speed;
				this.player.animations.play('walkDown');
			}

			if(this.cursor.left.isDown) {
				this.player.body.velocity.x -= speed;
				this.player.animations.play('walkLeft');
			} else if(this.cursor.right.isDown) {
				this.player.body.velocity.x += speed;
				this.player.animations.play('walkRight');
			} 
		} else {
			this.player.animations.stop();
		}
        

	}

	



}

export default GameState;
