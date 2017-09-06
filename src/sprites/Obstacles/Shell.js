import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'shell' })
    this.width = 66
    this.height = 90
    this.HP = 30
    this.destructable = true
    this.body.allowGravity = false
    this.body.immovable = true
  }

  update () {
    this.angle += Math.random() * 4 * (Math.random() * 100 < 50 ? 1 : -1)
  }
}
