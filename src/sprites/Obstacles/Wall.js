import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y, destructable }) {
    super({ game, world, x, y, asset: 'wall' })
    this.width = 50
    this.height = 50
    this.HP = 30
    this.body.allowGravity = false
    this.body.immovable = true
    this.destructable = !!destructable
  }

  whenCharged (charger) {
    this.HP -= charger.charged
  }

  update () {

  }
}
