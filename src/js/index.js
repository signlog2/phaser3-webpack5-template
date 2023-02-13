import Phaser from 'phaser'
import GameScene from './gameScene';

const config = {
   type: Phaser.AUTO,
   width: 600,
   height: 600,
   title: 'My Game',
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 300 },
         debug: false
      }
   },
   scene: [GameScene]
};

new Phaser.Game(config);
