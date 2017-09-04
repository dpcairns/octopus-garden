import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game }) {
    super(game, 0, 0, 'ocean')

    this.width = 2000
    this.height = 1000

    this.game.add.existing(this)
    this.game.oceanBackground = this
  }

  update () {

  }
}
