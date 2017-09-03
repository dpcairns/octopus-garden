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
    walls
  }) {
    super({ game, x, y, asset: 'octopus' })
    this.anchor.setTo(0.5)
    this.width = 100
    this.height = 100
    this.initialTint = this.tint
    this.initialWidth = this.width
    this.body.allowGravity = true

    this.body.gravity.y = INITIAL_GRAVITY
    this.maxVelocity = MAX_VELOCITY
    this.maxNormalVelocity = MAX_NORMAL_VELOCITY
    this.minNormalVelocity = MIN_NORMAL_VELOCITY
    this.initialVelocityFactor = INITIAL_VELOCITY_FACTOR
    this.goForward = true
    this.charging = false
    this.charged = false
    this.movingWhileChargedCounter = 0
    this.shotCounter = 0
    this.leftKeeper = new Set()
    this.rightKeeper = new Set()
    this.inkMissiles = this.game.add.group()
    this.coins = coins
    this.score = score
    this.walls = walls

    this.velocityFactor = this.initialVelocityFactor
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

  shootInk () {
    this.inkMissiles.add(new InkMissile({ // eslint-disable-line
      game: this.game,
      world: this.world,
      x: this.x,
      y: this.y,
      octoAngle: this.angle,
      octoSpeed: this.velocityFactor
    }))
  }

  update () {
    updater(this)
  }
}