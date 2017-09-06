import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'shell' })
    this.width = 66
    this.height = 90
    this.HP = 30
    this.destructable = true
    this.body.allowGravity = false
    this.body.immovable = true
    this.text = ''
  }

  update () {
    this.angle += Math.random() * 4 * (Math.random() * 100 < 50 ? 1 : -1)

    if (this.HP <= 0) {
      this.text = this.game.shells.children.length.toString()
      // const numberLeft = this.game.add.text(this.x + 10, this.y + 10, this.text)
      // const numberTween = this.game.add.tween(numberLeft).to({ alpha: 0 }, 2000,
      //   'Linear',
      //   false,
      //   500,
      //   null,
      //   false)
      // numberTween.onComplete.add(() => numberLeft.destroy())
      this.destroy()
    }
  }
}
