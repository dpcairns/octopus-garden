export const makeBorderWalls = (_this) => {
  for (let i = 0; i < _this.world.width; i += 50) {
    if (i < (_this.world.width / 2) + 200 && i > (_this.world.width / 2) - 200) {
      _this.makeWall(i, _this.world.height, true)
    } else {
      _this.makeWall(i, _this.world.height)
    }
  }

  for (let i = 0; i < _this.world.height; i += 50) {
    if (i < (_this.world.height / 2) + 200 && i > (_this.world.height / 2) - 200) {
      _this.makeWall(_this.world.width, i, true)
    } else {
      _this.makeWall(_this.world.width, i)
    }
  }
}

export const makeRandomCorals = (_this) => {
  for (let i = 0; i < 50; i++) {
    _this.makeCoral((() => Math.random() * _this.world.width)(), (() => Math.random() * _this.world.height)())
  }
}
