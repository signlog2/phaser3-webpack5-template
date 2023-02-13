import Phaser from 'phaser'


export default class GameScene extends Phaser.Scene {
   constructor() {
      super();

      this.canvasHeight;
      this.canvasWidth;
   }

   preload() {
      this.load.image('bg', '/assets/background_placeholder.png');
   }

   create() {
      this.canvasHeight = this.sys.game.canvas.height;
      this.canvasWidth = this.sys.game.canvas.width;

      this.add.image(this.canvasWidth / 2, this.canvasHeight / 2, 'bg');
   }

   update() {

   }
}
