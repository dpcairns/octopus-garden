export const makeBorderWallsAndDecoration = (_this) => {
  const height = _this.game.oceanBackground.height
  const width = _this.game.oceanBackground.width

  for (let i = 0; i < width; i += 50) {
    if (i < (width / 2) + 200 && i > (width / 2) - 200) {
      _this.makeWall(i, height, true)
    } else {
      _this.makeWall(i, height)
    }

    if (i % 2 === 0) {
      _this.makeCoral(i, height - 80)
    }
  }

  for (let i = 0; i < width; i += 50) {
    _this.makeSeaweed(Math.random() * width, height - 200)
  }

  for (let i = 0; i < height; i += 50) {
    if (i < (height / 2) + 200 && i > (height / 2) - 200) {
      _this.makeWall(width, i, true)
    } else {
      _this.makeWall(width, i)
    }
  }
}

export const makeRandomCorals = (_this) => {
  for (let i = 0; i < 50; i++) {
    _this.makeSquareThing((() => Math.random() * _this.world.width)(), (() => Math.random() * _this.world.height)())
  }
}
