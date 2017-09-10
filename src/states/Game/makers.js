import OceanBG from '../../sprites/Backgrounds/OceanBG'
import CaveBG from '../../sprites/Backgrounds/CaveBG'

export const makeBorderRocksAndDecoration = (_this) => {
  const height = _this.game.oceanBackground.height - 50
  const width = _this.game.oceanBackground.width

  // horixontal walls
  for (let i = 0; i < width - 150; i += 100) {
    if (i < (width / 2) + 200 && i > (width / 2) - 200) {
      _this.makeRocks(i, height, true)
    } else {
      _this.makeRocks(i, height)
    }
  }

  // vertical walls
  for (let i = 0; i < height; i += 100) {
    if (i < (height / 2) + 200 && i > (height / 2) - 200) {
      _this.makeRocks(width, i, true, true)
    } else {
      _this.makeRocks(width, i, false, true)
    }
  }

  for (let i = 0; i < width; i += 50) {
    _this.makeSeaweed(Math.random() * width, height)
    _this.makeCoral(i, height)
    _this.makeVine(Math.random() * width, height + 50)
  }
}

export const makeRandomShells = (_this) => {
  for (let i = 0; i < 20; i++) {
    _this.makeShell((() => Math.random() * _this.world.width)(), (() => Math.random() * _this.world.height)())
  }
}

export const makeCrabs = (_this) => {
  for (let i = 0; i < 10; i++) {
    _this.makeCrab((() => Math.random() * _this.world.width)(), _this.world.height)
  }
}

export const makeBackgrounds = (_this) => {
  new CaveBG({ // eslint-disable-line
    game: _this.game
  })

  new OceanBG({ // eslint-disable-line
    game: _this.game
  })
}
