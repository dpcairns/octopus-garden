import RootSprite from '../RootSprite'
import constants from '../../constants'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'crab' })
    const walkDistance = Math.random() * 200 + 500
    const duration = Math.random() * 3000 + 1000
    this.initialWidth = 100
    this.initialHeight = 75
    this.initialTint = this.tint
    this.width = 100
    this.height = 75
    this.initialHP = 300
    this.body.setSize(100, 80, 50, 50)
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
    this.crabWalk.stop()
    this.tint = constants.RED
    this.angle += Math.random() < 0.5 ? Math.random() * 5 + 10 : Math.random() * -5 - 10
    this.body.velocity.x = missile.body.velocity.x
    this.body.velocity.y = -Math.abs(missile.body.velocity.y)
    this.HP -= missile.power
    setTimeout(() => { if (this.tint !== this.initialTint) this.tint = this.initialTint }, 500)
  }

  whenCharged (charger) {
    this.crabWalk.stop()
    this.angle += Math.random() < 0.5 ? Math.random() * 15 : Math.random() * -15
    this.tint = constants.RED

    this.body.velocity.x = charger.body.velocity.x
    this.body.velocity.y = -Math.abs(charger.body.velocity.y)

    this.HP -= charger.charged / 100
    setTimeout(() => { if (this.tint !== this.initialTint) this.tint = this.initialTint }, 500)
  }

  update () {
    if (this.HP <= 0) {
      this.angle += 100
      setTimeout(() => this.destroy(), 1000)
    }
  }
}
