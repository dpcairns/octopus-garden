import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor ({ game, x, y, text }) {
    super(game, x, y, text)
    this.font = 'Bangers'
    this.padding.set(10, 16)
    this.fontSize = 40
    this.fill = 'black'
    this.smoothed = false
    this.anchor.setTo(0.5)

    this.game.add.existing(this)
  }

  update () {

  }
}
