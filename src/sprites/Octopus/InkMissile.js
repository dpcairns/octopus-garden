import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, octoAngle, octoSpeed }) {
    super({ game, world, x, y, asset: 'blob' })
    this.width = 30
    this.height = 30
    this.octoAngle = octoAngle
    this.octoSpeed = octoSpeed
    this.body.collideWorldBounds = false
    this.game = game
    this.outOfBoundsKill = true

    this.body.gravity.y = 0
  }

  update () {
    this.angle += 100
    this.game.physics.arcade.velocityFromAngle(this.octoAngle - 90, this.octoSpeed + 1000, this.body.velocity)
  }
}
