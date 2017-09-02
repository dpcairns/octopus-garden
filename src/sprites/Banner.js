import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, world, loseScore, banner, bannerText }) {
    const x = Math.random() * world.width
    const y = 0
    super(game, x, y, 'coin')

    this.bannerText = 'Go dude go! '
    this.banner = this.add.text(this.world.centerX, this.game.height - 80, this.bannerText)
    this.banner.font = 'Bangers'
    this.banner.padding.set(10, 16)
    this.banner.fontSize = 40
    this.banner.fill = '#77BFA3'
    this.banner.smoothed = false
    this.banner.anchor.setTo(0.5)

    this.game.add.existing(this)
  }

  update () {

  }
}
