import RootSprite from '../RootSprite'
import constants from '../../constants'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'crab' })
    const walkDistance = Math.random() * 1000 + 500
    const duration = Math.random() * 3000 + 1000
    this.initialWidth = 100
    this.initialHeight = 75
    this.width = 100
    this.height = 75
    this.initialHP = 300
    this.HP = 300
    this.destructable = true
    this.animations.add('walk')
    this.animations.play('walk', 5, true)
    this.outOfBoundsKill = true
    this.crabWalk = this.game.add.tween(this)
      .to({ x: Math.random() < 0.5 ? x + Math.random() * walkDistance : x - Math.random() * walkDistance },
        duration,
        'Linear',
        true,
        null,
        null,
        true
      )
  }

  whenHit (missile) {
    this.tint = constants.RED
    this.crabWalk.stop()
    this.body.velocity.x = missile.body.velocity.x
    this.body.velocity.y = -missile.body.velocity.y
    this.HP -= missile.power
  }

  whenCharged (charger) {
    this.crabWalk.stop()
    this.tint = constants.RED
    this.body.velocity.x = charger.body.velocity.x / 2
    this.body.velocity.y = charger.body.velocity.y / 2
    this.HP -= charger.charged / 100
  }

  update () {
    if (this.tint !== 16777215) this.tint = 16777215
    if (this.HP <= 0) {
      this.angle += 100
      setTimeout(() => this.destroy(), 200)
    }
  }
}
