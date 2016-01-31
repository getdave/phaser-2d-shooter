import config from './config';
import GameState from 'states/GameState';


var game = new Phaser.Game( config.width, config.height, config.renderer, config.name );

//game.state.add('Boot', Boot);
//game.state.add('Load', Load);
//game.state.add('MainMenu', MainMenu);
game.state.add('Game', GameState);

game.state.start('Game');

export default game;