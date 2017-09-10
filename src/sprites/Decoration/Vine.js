import RootDecorationSprite from './RootDecorationSprite'

export default class extends RootDecorationSprite {
  constructor ({ game, world, x, y }) {
    const height = Math.random() * 100 + 150
    const width = 50
    super({
      game,
      world,
      x,
      y,
      asset: 'vine',
      width,
      height
    })

    this.body = false
  }

  update () {
  }
}
