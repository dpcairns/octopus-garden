import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, world, loseScore, banner, bannerText }) {
    const x = Math.random() * world.width
    const y = 0
    super(game, x, y, 'coin')

    this.loseScore = loseScore
    this.banner = banner
    this.bannerText = bannerText

    this.game.physics.arcade.enable(this)

    this.body.bounce.setTo(1, 1)
    this.body.collideWorldBounds = true
    this.body.velocity.x = 0
    this.body.velocity.y = 0
    this.body.gravity.y = 100
    this.animations.add('spin')
    this.animations.play('spin', 30, true)

    this.game.add.existing(this)
  }

  update () {
    if (this.body.blocked.down === true) {
      this.loseScore()
    }
  }
}
