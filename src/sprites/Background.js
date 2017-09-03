import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, asset }) {
    super(game, 0, 0, asset)

    this.width = 2000
    this.height = 1000

    this.game.add.existing(this)
  }

  update () {

  }
}
