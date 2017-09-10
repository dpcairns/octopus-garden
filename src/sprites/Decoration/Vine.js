import RootDecorationSprite from './RootDecorationSprite'

export default class extends RootDecorationSprite {
  constructor ({ game, world, x, y }) {
    const height = Math.random() * 100 + 100
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

    this.animations.add('vine')
    this.animations.play('vine', Math.random() * 10, true)
  }

  update () {
  }
}
