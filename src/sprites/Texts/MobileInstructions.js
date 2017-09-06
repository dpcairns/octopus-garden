import Phaser from 'phaser'

export default class extends Phaser.Text {
  constructor ({ game, world, bannerText }) {
    super(game, 1550, 500, 'Swipe to rotate. \nOne finger to shoot. \nTwo fingers to charge.')
    this.font = 'Bangers'
    this.align = 'center'
    this.padding.set(10, 16)
    this.fontSize = 40
    this.fill = '#000000'
    this.smoothed = false
    this.anchor.setTo(0.5)

    const mobile = this.game.add.sprite(1450, 200, 'mobile')
    mobile.width = 200
    mobile.height = 200
    this.game.add.existing(this)
  }

  update () {

  }
}
