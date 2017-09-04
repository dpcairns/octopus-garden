import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, walls }) {
    super({ game, world, x, y, asset: 'coral' })
    this.width = 80
    this.height = 80
    this.body.allowGravity = false
    this.body.immovable = true

    this.animations.add('coral')
    this.animations.play('coral', 5, true)
  }

  update () {

  }
}
