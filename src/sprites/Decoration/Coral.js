import RootDecorationSprite from './RootDecorationSprite'

export default class extends RootDecorationSprite {
  constructor ({ game, world, x, y }) {
    const height = Math.random() * 100 + 40
    const width = Math.random() * 100 + 40
    super({
      game,
      world,
      x,
      y: y - height,
      asset: Math.random() < 0.5 ? 'coral' : 'coral-yellow',
      width,
      height
    })
  }

  update () {
  }
}
