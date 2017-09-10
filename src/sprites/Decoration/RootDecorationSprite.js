import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, asset, width, height }) {
    super({ game, world, x, y, asset })
    this.width = width
    this.height = height
    this.body = false
  }

  update () {
  }
}
