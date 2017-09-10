import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world }) {
    const x = Math.random() * world.width
    const y = 0
    super({ game, world, x, y, asset: 'coin' })

    this.angle = Math.random() * 90
    this.game.add.tween(this).to({ width: 0 },
      500,
      'Linear',
      true,
      null,
      null,
      true)
  }

  update () {

  }
}
