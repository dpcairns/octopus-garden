import RootSprite from '../RootSprite'
import InkMissile from './InkMissile'
import updater from './updater'
import bindKeys from './bindKeys'

import {
  INITIAL_GRAVITY,
  MAX_VELOCITY,
  MAX_NORMAL_VELOCITY,
  MIN_NORMAL_VELOCITY,
  INITIAL_VELOCITY_FACTOR
} from './constants'

export default class extends RootSprite {
  constructor ({
    game,
    x,
    y,
    world,
    coins,
    score,
    shells,
    mobileHolding
  }) {
    super({ game, x, y, asset: 'octopus' })
    this.update = updater(this)
    this.width = 200
    this.height = 150
    this.anchor.setTo(0.5)
    this.initialTint = this.tint
    this.initialWidth = this.width
    this.body.allowGravity = true

    this.body.gravity.y = INITIAL_GRAVITY
    this.maxVelocity = MAX_VELOCITY
    this.maxNormalVelocity = MAX_NORMAL_VELOCITY
    this.minNormalVelocity = MIN_NORMAL_VELOCITY
    this.initialVelocityFactor = INITIAL_VELOCITY_FACTOR(this)
    this.goForward = true
    this.charging = false
    this.charged = false
    this.movingWhileChargedCounter = 0
    this.shotCounter = 0
    this.leftKeeper = new Set()
    this.rightKeeper = new Set()
    this.velocityFactor = this.initialVelocityFactor

    this.game.octopus = this
    this.animations.add('octodynamic-shuffle')
    this.animations.play('octodynamic-shuffle', 15, true)

    bindKeys(this)
  }

  incrementLeft (e) {
    if (this.rightKeeper.size > 0) {
      this.clearRight()
    }
    this.leftKeeper.add(e.keyCode)
  }

  clearLeft () {
    this.leftKeeper.clear()
  }

  incrementRight (e) {
    if (this.leftKeeper.size > 0) {
      this.clearLeft()
    }
    this.rightKeeper.add(e.keyCode)
  }

  clearRight () {
    this.rightKeeper.clear()
  }

  resetWidthAndColor () {
    this.tint = this.initialTint
    this.width = this.initialWidth
  }

  stopGoingForward () {
    this.goForward = false
  }

  resetMovingWhileChargedCounter () {
    this.movingWhileChargedCounter = 0
  }

  getCoin (getter, coin) {
    coin.angle += 100
    setTimeout(() => coin.destroy(), 200)
    this.score++
  }

  destroyThing (destroyer, destructable) {
    if (destructable.destructable) {
      if (destroyer.key === 'octopus') {
        if (destroyer.charged > 1000 && this.goForward && destructable.whenCharged) {
          destructable.whenCharged(destroyer)
        }
      }

      if (destroyer.key === 'blob' && destructable.whenHit) {
        destructable.whenHit(destroyer)
      }

      if (destructable.HP <= 0 && destructable.key === 'rocks') {
        destructable.body.allowGravity = true
        destructable.body.immovable = false
        destructable.body.collideWorldBounds = false
        destructable.body.gravity.y = 10000
      }
    }
  }

  shootInk () {
    const newMissile = new InkMissile({
      game: this.game,
      world: this.world,
      x: this.x,
      y: this.y,
      octoAngle: this.angle,
      octoSpeed: this.velocityFactor
    })

    this.game.inkMissiles.add(newMissile)
  }
}
