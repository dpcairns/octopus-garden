import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, destructable, vertical }) {
    super({ game, world, x, y, asset: 'rocks' })
    this.width = 150
    this.height = 50
    this.HP = 30
    this.body.allowGravity = false
    this.body.immovable = true
    this.destructable = !!destructable
    if (vertical) this.body.setSize(50, 50, -70, 0)
    if (vertical === true) this.angle = 90
  }

  whenCharged (charger) {
    this.HP -= charger.charged
  }

  update () {

  }
}
