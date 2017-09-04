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

export const mobileRotation = (_this, rotate) => {
  // detect mobile swipe
  const swipeCheck = _this.swipe.check()

  // mobile rotation left
  if (swipeCheck !== null && swipeCheck.direction &&
    (swipeCheck.direction === _this.swipe.DIRECTION_LEFT ||
      swipeCheck.direction === _this.swipe.DIRECTION_UP ||
    swipeCheck.direction === _this.swipe.DIRECTION_UP_LEFT ||
    swipeCheck.direction === _this.swipe.DIRECTION_DOWN_LEFT)
  ) {
    rotate(_this, -45)
    _this.clearLeft()
  }

  // mobile rotation right
  if (swipeCheck !== null && swipeCheck.direction &&
    (swipeCheck.direction === _this.swipe.DIRECTION_RIGHT ||
    swipeCheck.direction === _this.swipe.DIRECTION_DOWN ||
    swipeCheck.direction === _this.swipe.DIRECTION_UP_RIGHT ||
    swipeCheck.direction === _this.swipe.DIRECTION_DOWN_RIGHT)
  ) {
    rotate(_this, 45)
    _this.clearRight()
  }
}
