import RootDecorationSprite from './RootDecorationSprite'

export default class extends RootDecorationSprite {
  constructor ({ game, world, x, y }) {
    const height = Math.random() * 300
    const width = Math.random() * 100
    super({
      game,
      world,
      x,
      y: y - height,
      asset: 'seaweed',
      width: width,
      height
    })

    this.animations.add('seaweed')
    this.animations.play('seaweed', 3, true)
  }

  update () {
  }
}
