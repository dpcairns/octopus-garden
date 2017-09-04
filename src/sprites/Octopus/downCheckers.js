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
