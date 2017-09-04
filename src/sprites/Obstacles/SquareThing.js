import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'squareThings' })
    this.width = 50
    this.height = 50
    this.HP = 30
    this.destructable = true
    this.body.allowGravity = false
    this.body.immovable = true
    this.animations.add('choose-1', [(() => Math.floor(Math.random() * 9))()])
    this.animations.play('choose-1')
  }

  update () {
  }
}
