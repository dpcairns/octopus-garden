import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, octoAngle, octoSpeed }) {
    super({ game, world, x, y, asset: 'blob' })
    const blobFactor = Math.random()
    this.width = blobFactor * 80
    this.height = blobFactor * 72
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
