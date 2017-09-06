import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, octoAngle, octoSpeed }) {
    super({ game, world, x, y, asset: 'blob' })
    this.width = Math.random() * 30 + 10
    this.height = Math.random() * 30 + 10
    this.octoAngle = octoAngle
    this.octoSpeed = octoSpeed
    this.body.collideWorldBounds = false
    this.game = game
    this.outOfBoundsKill = true
    this.animations.add('blobby')
    this.animations.play('blobby', 10, true)
  }

  update () {
    this.game.physics.arcade.velocityFromAngle(this.octoAngle - 90, this.octoSpeed + 300, this.body.velocity)
  }
}
