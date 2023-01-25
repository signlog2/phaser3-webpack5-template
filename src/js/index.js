import Phaser from 'phaser'
import GameScene from './gameScene';

const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 800,
   title: 'Infinite tower',
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