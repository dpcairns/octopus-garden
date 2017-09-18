export const pinkiesDown = (_this) => (
  _this.A.isDown &&
        !_this.S.isDown &&
        !_this.D.isDown &&
        !_this.F.isDown &&
        _this.COLON.isDown &&
        !_this.L.isDown &&
        !_this.K.isDown &&
        !_this.J.isDown
)

export const indexFingersDown = (_this) => (
  !_this.A.isDown &&
        _this.S.isDown &&
        !_this.D.isDown &&
        !_this.F.isDown &&
        !_this.COLON.isDown &&
        _this.L.isDown &&
        !_this.K.isDown &&
        !_this.J.isDown
)

export const ringFingersDown = (_this) => (
  !_this.A.isDown &&
        !_this.S.isDown &&
        !_this.D.isDown &&
        _this.F.isDown &&
        !_this.COLON.isDown &&
        !_this.L.isDown &&
        !_this.K.isDown &&
        _this.J.isDown
)

export const homeRowDown = (_this) => (
  _this.A.isDown &&
        _this.S.isDown &&
        _this.D.isDown &&
        _this.F.isDown &&
        _this.COLON.isDown &&
        _this.L.isDown &&
        _this.K.isDown &&
        _this.J.isDown
)

export const middleFingersDown = (_this) => (
  !_this.A.isDown &&
        !_this.S.isDown &&
        _this.D.isDown &&
        !_this.F.isDown &&
        !_this.COLON.isDown &&
        !_this.L.isDown &&
        _this.K.isDown &&
        !_this.J.isDown
)

export const mobileRotation = (_this) => {
  if ((_this.game.input.pointer1.isDown || _this.game.input.activePointer.leftButton.isDown) && !_this.game.input.pointer2.isDown) {
    _this.rotation = _this.game.physics.arcade.angleToPointer(_this) + 1.5
  }
}
