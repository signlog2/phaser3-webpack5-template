import Phaser from 'phaser'

const config = {
   type: Phaser.AUTO,
   width: 800,
   height: 600,
   title: 'Infinite tower',
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 300 },
         debug: false
      }
   },
   scene: {
      preload: preload,
      create: create,
      update: update
   }
};

function preload() {

}

function create() {

}

function update() {

}