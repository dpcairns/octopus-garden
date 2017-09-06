import RootSprite from '../RootSprite'

export default class extends RootSprite {
  constructor ({ game, world, x, y }) {
    super({ game, world, x, y, asset: 'crab' })
    const walkDistance = Math.random() * 1000 + 500
    const duration = Math.random() * 3000 + 1000
    this.initialWidth = 100
    this.initialHeight = 75
    this.width = 100
    this.height = 75
    this.initialHP = 300
    this.HP = 300
    this.destructable = true
    this.animations.add('walk')
    this.animations.play('walk', 5, true)
    this.game.add.tween(this)
      .to({ x: Math.random() < 0.5 ? x + Math.random() * walkDistance : x - Math.random() * walkDistance },
        duration,
        'Linear',
        true,
        null,
        null,
        true
      )
  }

  whenHit (missile) {
    this.width = this.width > (this.initialWidth / 1.3) ? (this.initialWidth * (this.HP / this.initialHP)) : this.initialWidth / 1.3
    this.height = this.height > (this.initialHeight / 1.3) ? (this.initialHeight * (this.HP / this.initialHP)) : this.initialHeight / 1.3
    this.HP -= missile.power
  }

  update () {

  }
}
