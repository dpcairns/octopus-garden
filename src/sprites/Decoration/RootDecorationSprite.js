import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, asset, width, height }) {
    super({ game, world, x, y, asset })
    this.width = width
    this.height = height
    this.body.allowGravity = false
    this.body.immovable = true

    this.animations.add('seaweed')
    this.animations.play('seaweed', 3, true)
  }

  update () {
  }
}
