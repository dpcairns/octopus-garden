import OceanBG from '../../sprites/Backgrounds/OceanBG'
import CaveBG from '../../sprites/Backgrounds/CaveBG'

export const makeBorderRocksAndDecoration = (_this) => {
  const height = _this.world.height
  const width = _this.world.width

  for (let i = 0; i < width; i += 80) {
    _this.makeSeaweed(Math.random() * width, 0)
    _this.makeCoral(i, 0)
    _this.makeVine(Math.random() * width, 0)
    _this.makeSeaweed(Math.random() * width, height / 2)
    _this.makeCoral(i, height / 2)
  }
}

export const makeRandomShells = (_this) => {
  for (let i = 0; i < 20; i++) {
    _this.makeShell((() => Math.random() * _this.world.width)(), (() => Math.random() * _this.world.height)())
  }
}

export const makeCrabs = (_this) => {
  for (let i = 0; i < 40; i++) {
    _this.makeCrab((() => Math.random() * _this.world.width)(), _this.world.height - 500)
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
