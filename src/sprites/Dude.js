import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, world }) {
    super(game, x, y, 'dude')
    this.game.physics.arcade.enable(this)
    this.body.bounce.setTo(0.65, 0.65)
    this.body.collideWorldBounds = true
    this.anchor.setTo(0.5)
    this.body.gravity.y = 1000
    this.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7])
    this.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15])
    this.game.add.existing(this)
  }

  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.body.velocity.x = -500
      this.animations.play('left', 10)
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.body.velocity.x = 500
      this.animations.play('right', 10)
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.body.velocity.y = -500
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.body.velocity.y = 250
    }
  }
}
