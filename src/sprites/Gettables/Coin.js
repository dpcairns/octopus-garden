import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world }) {
    const x = Math.random() * world.width
    const y = 0
    super({ game, world, x, y, asset: 'coin' })
    this.animations.add('spin')
    this.animations.play('spin', 30, true)
  }

  update () {

  }
}
