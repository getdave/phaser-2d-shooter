class Player extends Phaser.Sprite {

	constructor({ game, x, y, asset, frame }) {
        super(game, x, y, asset, frame);

        this.game = game;

		this.anchor.setTo(0.5);

        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        // Player Animations
		this.addAnimations();
		
		// Create cursorts
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	

	update() {
		this.move();

	}


	addAnimations() {
		var playerWalkSpeed = 10; 
		this.animations.add('walkDown', [0, 1], playerWalkSpeed, true);
    	this.animations.add('walkRight', [2, 3], playerWalkSpeed, true);
    	this.animations.add('walkUp', [4, 5], playerWalkSpeed, true);
    	this.animations.add('walkLeft', [6, 7], playerWalkSpeed, true);
	}

	move() {

		var speed = 200;

		this.body.velocity.y = 0;
		this.body.velocity.x = 0;

		if ( this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.right.isDown || this.cursors.left.isDown ) {
			
			// Up / Down
			if(this.cursors.up.isDown) {
				this.body.velocity.y -= speed;
				this.animations.play('walkUp');
			}
			else if(this.cursors.down.isDown) {
				this.body.velocity.y += speed;
				this.animations.play('walkDown');
			}

			// Left / Right
			if(this.cursors.left.isDown) {
				this.body.velocity.x -= speed;
				this.animations.play('walkLeft');
			} else if(this.cursors.right.isDown) {
				this.body.velocity.x += speed;
				this.animations.play('walkRight');
			} 
		} else {
			this.animations.stop();
		}
        

	}
	
}

export default Player;