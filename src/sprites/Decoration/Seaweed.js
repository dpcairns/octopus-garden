import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'seaweed' })
    this.width = 40
    this.height = 200
    this.body.allowGravity = false
    this.body.immovable = true

    this.animations.add('seaweed')
    this.animations.play('seaweed', 3, true)
  }

  update () {
  }
}
