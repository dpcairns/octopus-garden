import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, asset, width, height }) {
    super({ game, world, x, y, asset })
    this.width = width
    this.height = height
    this.body.gravity.y = 500

    this.animations.add('boogie')
    this.animations.play('boogie', Math.random() * 10, true)
  }

  update () {

  }
}
