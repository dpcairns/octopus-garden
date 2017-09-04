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

export const swipeLeft = (_this) => {
  const check = _this.swipe.check()

  console.log()
  if (check !== null && check.direction) {
    return check.direction === _this.swipe.DIRECTION_LEFT
  }
}

export const swipeRight = (_this) => {
  const check = _this.swipe.check()

  if (check !== null && check.direction) {
    return check.direction === _this.swipe.DIRECTION_RIGHT
  }
}
