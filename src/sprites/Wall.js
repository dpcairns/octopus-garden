import RootSprite from './RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'wall' })

    this.width = 50
    this.height = 50
    this.body.allowGravity = false
    this.body.immovable = true
  }

  update () {
  }
}