import RootSprite from '../RootSprite'
import constants from '../../constants'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'crab' })
    const walkDistance = Math.random() * 200 + 500
    const duration = Math.random() * 3000 + 1000
    this.initialWidth = 100
    this.initialHeight = 75
    this.width = 100
    this.height = 75
    this.initialHP = 300
    this.body.setSize(75, 80, 50, 50)
    this.HP = 300
    this.destructable = true
    this.animations.add('walk')
    this.animations.play('walk', Math.random() * 10, true)
    this.outOfBoundsKill = true
    this.body.gravity.y = 100
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
    this.body.velocity.y = -Math.abs(missile.body.velocity.y)
    this.HP -= missile.power
  }

  whenCharged (charger) {
    this.crabWalk.stop()
    this.crabTilt = this.game.add.tween(this)
      .to({ angle: this.angle + Math.random() < 0.5 ? 45 : -45 },
        500,
        'Linear',
        true,
        null,
        null,
        true
      )

    this.tint = constants.RED
    this.HP -= charger.charged / 100
  }

  update () {
    if (this.tint !== 16777215) this.tint = 16777215
    if (this.HP <= 0) {
      this.HP = 0
      if (this.crabTilt) {
        this.crabTilt.stop()
      }
      this.body = false
      this.angle += 100
      setTimeout(() => this.destroy(), 1000)
    }
  }
}
