import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor ({ game, world, bannerText }) {
    super(game, 100, 100, bannerText)
    console.log(this.text)
    this.font = 'Bangers'
    this.padding.set(10, 16)
    this.fontSize = 40
    this.fill = '#77BFA3'
    this.smoothed = false
    this.anchor.setTo(0.5)

    this.game.add.existing(this)
  }

  update () {

  }
}
