import RootDecorationSprite from './RootDecorationSprite'

export default class extends RootDecorationSprite {
  constructor ({ game, world, x, y }) {
    const height = Math.random() * 100 + 20
    const width = Math.random() * 100 + 20
    super({
      game,
      world,
      x,
      y: y - height,
      asset: 'coral',
      width,
      height
    })

    this.animations.add('coral')
    this.animations.play('coral', 5, true)
  }

  update () {
  }
}
