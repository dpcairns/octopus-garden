import Phaser from 'phaser'

const CHARGE_MOVE_DURATION = 25
const INITIAL_GRAVITY = 2000
const MAX_VELOCITY = 2000
const MAX_NORMAL_VELOCITY = 800
const MIN_NORMAL_VELOCITY = -200
const INITIAL_VELOCITY_FACTOR = 200

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, world }) {
    super(game, x, y, 'octopus')
    this.game.physics.arcade.enable(this)
    this.body.collideWorldBounds = true
    this.anchor.setTo(0.5)
    this.width = 100
    this.height = 100
    this.initialTint = this.tint
    this.initialWidth = this.width
    this.game.add.existing(this)
    this.body.bounce.y = 10
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
    this.leftKeeper = 0
    this.rightKeeper = 0

    this.velocityFactor = this.initialVelocityFactor
    this.A = this.game.input.keyboard.addKey(Phaser.KeyCode.A)
    this.S = this.game.input.keyboard.addKey(Phaser.KeyCode.S)
    this.D = this.game.input.keyboard.addKey(Phaser.KeyCode.D)
    this.F = this.game.input.keyboard.addKey(Phaser.KeyCode.F)
    this.COLON = this.game.input.keyboard.addKey(Phaser.KeyCode.COLON)
    this.L = this.game.input.keyboard.addKey(Phaser.KeyCode.L)
    this.K = this.game.input.keyboard.addKey(Phaser.KeyCode.K)
    this.J = this.game.input.keyboard.addKey(Phaser.KeyCode.J)

    this.A.onDown.add(this.incrementLeft, this)
    this.S.onDown.add(this.incrementLeft, this)
    this.D.onDown.add(this.incrementLeft, this)
    this.F.onDown.add(this.incrementLeft, this)
    this.COLON.onDown.add(this.incrementRight, this)
    this.L.onDown.add(this.incrementRight, this)
    this.K.onDown.add(this.incrementRight, this)
    this.J.onDown.add(this.incrementRight, this)
  }

  incrementLeft () {
    if (this.rightKeeper > 0) {
      this.clearRight()
    }
    this.leftKeeper++
  }

  clearLeft () {
    this.leftKeeper = 0
  }

  incrementRight () {
    if (this.leftKeeper > 0) {
      this.clearLeft()
    }
    this.rightKeeper++
  }

  clearRight () {
    this.rightKeeper = 0
  }

  resetWidthAndColor () {
    this.tint = this.initialTint
    this.width = this.initialWidth
  }

  stopMoving () {

  }

  update () {
    if (this.velocityFactor > this.maxNormalVelocity) {
      this.velocityFactor = this.maxNormalVelocity
    }

    if (this.velocityFactor < this.minNormalVelocity) {
      this.velocityFactor = this.minNormalVelocity
    }

    if (!this.body.blocked.none) {
      this.charging = false
    }

    if (this.leftKeeper === 4) {
      this.game.add.tween(this).to({ angle: this.angle - 45 }, 100, 'Linear', true)
      this.clearLeft()
    }

    if (this.rightKeeper === 4) {
      this.game.add.tween(this).to({ angle: this.angle + 45 }, 100, 'Linear', true)
      this.clearRight()
    }

    if (this.goForward) {
      this.game.physics.arcade.velocityFromAngle(this.angle - 90, this.velocityFactor, this.body.velocity)
    } else {
      this.game.physics.arcade.velocityFromAngle(this.angle - 90, 0, this.body.velocity)
    }

    // stop A ; (pinkies)
    if (this.A.isDown &&
          !this.S.isDown &&
          !this.D.isDown &&
          !this.F.isDown &&
          this.COLON.isDown &&
          !this.L.isDown &&
          !this.K.isDown &&
          !this.J.isDown) {
      this.clearLeft()
      this.clearRight()
      this.velocityFactor = 0
      this.goForward = false
    }

    // slow down / reverse: F J (ring fingers)
    if (!this.A.isDown &&
          this.S.isDown &&
          !this.D.isDown &&
          !this.F.isDown &&
          !this.COLON.isDown &&
          this.L.isDown &&
          !this.K.isDown &&
          !this.J.isDown) {
      this.clearLeft()
      this.clearRight()
      this.velocityFactor -= 50
      this.goForward = true
    }

    // speed up: S L (index fingers)
    if (!this.A.isDown &&
          !this.S.isDown &&
          !this.D.isDown &&
          this.F.isDown &&
          !this.COLON.isDown &&
          !this.L.isDown &&
          !this.K.isDown &&
          this.J.isDown) {
      this.clearLeft()
      this.clearRight()
      if (this.velocityFactor < 0) {
        this.velocityFactor = this.initialVelocityFactor
      }
      this.velocityFactor += 10
      this.goForward = true
    }

    // charge up!: ALL HOME KEYS
    if (this.A.isDown &&
          this.S.isDown &&
          this.D.isDown &&
          this.F.isDown &&
          this.COLON.isDown &&
          this.L.isDown &&
          this.K.isDown &&
          this.J.isDown) {
      this.charging = true
      this.clearLeft()
      this.clearRight()
      this.goForward = false
      this.game.physics.arcade.velocityFromAngle(this.angle - 90, 0, this.body.velocity)
      if (this.charged < this.maxNormalVelocity) {
        this.charged = this.maxNormalVelocity
      }
      this.charged += 20
      this.game.camera.shake(0.005, 50)
    } else {
      this.charging = false
      this.goForward = true
    }

    if (this.charging) {
      this.charged++
    }

    if (this.charging || this.charged) {
      const chargeProps = {
        tint: Math.random() * this.initialTint,
        width: this.width * 0.993
      }

      this.game.add.tween(this).to(chargeProps, 10, 'Linear', true, 0, 2)
    }

    if (this.charged && !this.charging && this.goForward === true) {
      if (this.movingWhileChargedCounter < CHARGE_MOVE_DURATION) {
        this.movingWhileChargedCounter++
        this.game.physics.arcade.velocityFromAngle(this.angle - 90, this.charged, this.body.velocity)
      } else {
        this.movingWhileChargedCounter = 0
        this.velocityFactor = this.initialVelocityFactor
        this.charged = 0
        this.game.physics.arcade.velocityFromAngle(this.angle - 90, this.velocityFactor, this.body.velocity)
      }
    }

    if (!this.charged &&
      !this.charging &&
      this.tint !== this.initialTint &&
      this.width !== this.initialWidth
    ) {
      this.resetWidthAndColor()
      this.movingWhileChargedCounter = 0
    }
  }
}
