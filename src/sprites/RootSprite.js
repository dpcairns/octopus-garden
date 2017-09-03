import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, world, x, y, asset }) {
    super(game, x, y, asset)

    this.game.physics.arcade.enable(this)

    this.body.bounce.setTo(0.5, 0.5)
    this.body.collideWorldBounds = true
    this.body.gravity.y = 100

    this.game.add.existing(this)
  }

  update () {

  }
}