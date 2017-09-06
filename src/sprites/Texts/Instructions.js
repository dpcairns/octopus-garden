import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor ({ game, world, text }) {
    super(game, 1000, 500, text)
    this.font = 'Bangers'
    this.align = 'center'
    this.padding.set(10, 16)
    this.fontSize = 40
    this.fill = '#000000'
    this.smoothed = false
    this.anchor.setTo(0.5)

    this.game.arrowKeys = this.game.add.sprite(900, 200, 'arrow-keys')
    this.game.add.existing(this)
  }

  update () {

  }
}
