import { CHARGE_MOVE_DURATION, SHOT_COUNTER_LIMIT } from './constants'
import {
  pinkiesDown,
  homeRowDown,
  indexFingersDown,
  ringFingersDown,
  middleFingersDown,
  mobileRotation
} from './downCheckers'
import { disableCollisionIfDead, rotate } from './helpers'

const updater = (_this) => () => {
  _this.animations.currentAnim.speed = _this.charged ? _this.charged / 40 : _this.velocityFactor / 40

  _this.game.physics.arcade.overlap(_this.game.protagonistParts, _this.game.coins, _this.getCoin, null, _this)
  _this.game.physics.arcade.overlap(_this.game.inkMissiles, _this.game.shells, _this.destroyThing, null, _this)
  _this.game.physics.arcade.collide(_this.game.protagonistParts, _this.game.obstacles, _this.destroyThing, disableCollisionIfDead, _this)
  _this.game.physics.arcade.collide(_this, _this.game.shells, _this.destroyThing, disableCollisionIfDead, _this)
  _this.game.physics.arcade.collide(_this, _this.game.walls, _this.destroyThing, disableCollisionIfDead, _this)

  // manage bespoke max velocity, so it doesn't interefere with charge max
  if (_this.velocityFactor > _this.maxNormalVelocity) {
    _this.velocityFactor = _this.maxNormalVelocity
  }

  // manage bespoke min velocity
  if (_this.velocityFactor < _this.minNormalVelocity) {
    _this.velocityFactor = _this.minNormalVelocity
  }

  // rotate left human style
  if (_this.LEFT.isDown && !_this.RIGHT.isDown) {
    rotate(_this, -30)
    _this.clearLeft()
  }

  // rotate octopus style right
  if (_this.rightKeeper.size === 4) {
    rotate(_this, 45)
    _this.clearRight()
  }

  // rotate left octopus style
  if (_this.leftKeeper.size === 4) {
    rotate(_this, -45)
    _this.clearLeft()
  }

  // check mobile swipes for rotation
  mobileRotation(_this, rotate)

  // rotate right human style
  if (_this.RIGHT.isDown && !_this.LEFT.isDown) {
    rotate(_this, 30)
    _this.clearRight()
  }

  // goForward flag controls whether we're goiging or not
  if (_this.goForward) {
    _this.game.physics.arcade.velocityFromAngle(_this.angle - 90, _this.velocityFactor, _this.body.velocity)
  } else {
    _this.game.physics.arcade.velocityFromAngle(_this.angle - 90, 0, _this.body.velocity)
  }

  // speed up: K D (middle fingers)
  if (middleFingersDown(_this) || _this.UP.isDown) {
    _this.clearLeft()
    _this.clearRight()
    if (_this.velocityFactor < 0) {
      _this.velocityFactor = _this.initialVelocityFactor
    }
    _this.velocityFactor += 10
    _this.goForward = true
  }

  // stop A ; (pinkies)
  if ((pinkiesDown(_this) || _this.Z.isDown)) {
    _this.clearLeft()
    _this.clearRight()
    _this.velocityFactor = 0
    _this.stopGoingForward()
  }

  // slow down / reverse: F J (ring fingers)
  if (indexFingersDown(_this) || (_this.DOWN.isDown && !_this.LEFT.isDown && !_this.RIGHT.isDown)) {
    _this.clearLeft()
    _this.clearRight()
    _this.velocityFactor -= 50
    _this.goForward = true
  }

  // pew pew: S L (index fingers)
  if (ringFingersDown(_this) ||
    _this.X.isDown ||
    _this.CONTROL.isDown ||
    (_this.game.input.pointer1.isDown && !_this.game.input.pointer2.isDown)
  ) {
    _this.clearLeft()
    _this.clearRight()
    if (_this.shotCounter > SHOT_COUNTER_LIMIT) {
      _this.shotCounter = 0
      _this.shootInk()
    }
    _this.shotCounter++
  }

  // charge up!: ALL HOME KEYS
  if (homeRowDown(_this) ||
  (_this.LEFT.isDown && _this.RIGHT.isDown && _this.DOWN.isDown) ||
  _this.SPACEBAR.isDown ||
  (_this.game.input.pointer1.isDown && _this.game.input.pointer2.isDown)
  ) {
    _this.charging = true
    _this.clearLeft()
    _this.clearRight()
    _this.stopGoingForward()
    if (_this.charged < _this.maxNormalVelocity) {
      _this.charged = _this.maxNormalVelocity
    }
    _this.charged += 20
    _this.game.camera.shake(0.005, 50)
  } else {
    _this.charging = false
    _this.goForward = true
  }

  // increment charged while charging
  if (_this.charging) {
    _this.charged++
  }

  // keep track of charge duration so they cant move charged forever
  if (_this.charged && !_this.charging && _this.goForward === true) {
    if (_this.movingWhileChargedCounter < CHARGE_MOVE_DURATION) {
      _this.movingWhileChargedCounter++
      _this.game.physics.arcade.velocityFromAngle(_this.angle - 90, _this.charged, _this.body.velocity)
    } else {
      _this.resetMovingWhileChargedCounter()
      _this.velocityFactor = _this.initialVelocityFactor
      _this.charged = 0
      _this.game.physics.arcade.velocityFromAngle(_this.angle - 90, _this.velocityFactor, _this.body.velocity)
    }
  }

  // do not charge if blocked. This helps manages color state
  if (!_this.body.blocked.none) {
    _this.charging = false
  }

  // manage colors and stretch while charging or moving while charged
  if (_this.charging || _this.charged) {
    const chargeProps = {
      tint: Math.random() * _this.initialTint,
      width: _this.width * 0.993
    }

    _this.game.add.tween(_this).to(chargeProps, 10, 'Linear', true, 0, 2)
  }

  // remove charge colors and stretch
  if (!_this.charged &&
    !_this.charging &&
    _this.tint !== _this.initialTint &&
    _this.width !== _this.initialWidth
  ) {
    _this.resetWidthAndColor()
    _this.resetMovingWhileChargedCounter()
  }
}

export default updater
