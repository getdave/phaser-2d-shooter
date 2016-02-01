class Player extends Phaser.Sprite {

	constructor({ game, x, y, asset, frame }) {
        super(game, x, y, asset, frame);

        this.game = game;

        this.anchor.setTo(0.5);

        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

	}
	
}

export default Player;