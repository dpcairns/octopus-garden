import RootSprite from '../RootSprite'
import Bangers from '../Texts/Bangers'
import constants from '../../constants'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'shell' })
    this.initialWidth = 66
    this.initialHeight = 90
    this.width = 66
    this.height = 90
    this.anchor.setTo(0.5)
    this.body.setSize(50, 50, 50, 400)
    this.initialHP = 30
    this.HP = 30
    this.destructable = true
    this.body.allowGravity = false
    this.body.immovable = true
    this.outOfBoundsKill = true
    this.text = ''
  }

  whenHit (missile) {
    this.tint = constants.TEAL
    this.width = this.width > (this.initialWidth / 1.3) ? (this.initialWidth * (this.HP / this.initialHP)) : this.initialWidth / 1.3
    this.height = this.height > (this.initialHeight / 1.3) ? (this.initialHeight * (this.HP / this.initialHP)) : this.initialHeight / 1.3
    this.HP -= missile.power
  }
  whenCharged (charger) {
    this.HP -= charger.charged
  }

  update () {
    this.angle += Math.random() * 4 * (Math.random() * 100 < 50 ? 1 : -1)

    if (this.HP <= 0) {
      this.angle += 100
      setTimeout(() => this.destroy(), 200)
      this.text = this.game.shells.children.length.toString() - 1
      const numberLeft = new Bangers({
        game: this.game,
        x: this.x + 10,
        y: this.y + 10,
        text: this.text
      })

      const numberTween = this.game.add.tween(numberLeft)
        .to({ alpha: 0 },
          2000,
          'Linear',
          true)
      numberTween.onComplete.add(() => numberLeft.destroy())
    }
  }
}
