import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, world, x, y, asset }) {
    super(game, x, y, asset)

    this.game.physics.arcade.enable(this)

    this.body.bounce.setTo(0.5, 0.5)
    this.body.autoCull = true
    this.body.collideWorldBounds = true
    this.body.gravity.y = 50

    this.game.add.existing(this)
  }

  update () {

  }
}
